---
layout: null
---

'use strict';
const staticCacheName = "version-{{site.time | date: '%Y%m%d%H%M%S'}}";
const pagesCacheName  = 'pages';
const imagesCacheName = 'images';

const cacheList = [
    staticCacheName,
    pagesCacheName,
    imagesCacheName
];

const offlinePages = [
    "/",
    {% for page in site.html_pages %}
      '{{ page.url }}',
    {% endfor %}
    {% for post in site.posts %}
      '{{ post.url }}',
    {% endfor %}
    '/index.html'
];

function updateStaticCache() {
    return caches.open(staticCacheName)
        .then( cache => {
            // These items won't block the installation of the Service Worker
            cache.addAll([
                
            ].concat(offlinePages));
            // These items must be cached for the Service Worker to complete installation
            return cache.addAll([
                
            ]);
        });
}

function stashInCache(cacheName, request, response) {
    caches.open(cacheName)
        .then( cache => cache.put(request, response) );
}

// Limit the number of items in a specified cache.
function trimCache(cacheName, maxItems) {
    caches.open(cacheName)
        .then( cache => {
            cache.keys()
                .then(keys => {
                    if (keys.length > maxItems) {
                        cache.delete(keys[0])
                            .then(trimCache(cacheName, maxItems));
                    }
                });
        });
}

// Remove caches whose name is no longer valid
function clearOldCaches() {
    return caches.keys()
        .then( keys => {
            return Promise.all(keys
                .filter(key => !cacheList.includes(key))
                .map(key => caches.delete(key))
            );
        });
}

self.addEventListener('install', event => {
    event.waitUntil(updateStaticCache()
        .then( () => self.skipWaiting() )
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(clearOldCaches()
        .then( () => self.clients.claim() )
    );
});

self.addEventListener('message', event => {
    if (event.data.command == 'trimCaches') {
        trimCache(pagesCacheName, 35);
        trimCache(imagesCacheName, 20);
    }
});

self.addEventListener("fetch", function(e){
  e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   )
});