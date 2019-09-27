function run() {
const url = setUpQuery();
var myHeaders = new Headers();
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Access-Control-Allow-Headers", "origin, x-requested-with, contenttype, Authorization");
myHeaders.append("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
var myInit = {
method: 'GET',
headers: myHeaders,
mode: 'cors',
cache: 'default'
};
fetch(url, myInit)
.then(response => response.json())
.then(json => {
// See https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#response
// to learn more about each of the properties in the response object.
showInitialContent(json.id);
const cruxMetrics = {
"First Contentful Paint": json.lighthouseResult.audits.metrics.details.items[0].firstContentfulPaint
};
//ùshowCruxContent(cruxMetrics);
const lighthouse = json.lighthouseResult;
const lighthouseMetrics = {
'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
'Speed Index': lighthouse.audits['speed-index'].displayValue,
'Time To Interactive': lighthouse.audits['interactive'].displayValue,
'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
'First CPU Idle': lighthouse.audits['first-cpu-idle'].displayValue,
'Estimated Input Latency': lighthouse.audits['estimated-input-latency'].displayValue
};
showLighthouseContent(lighthouseMetrics);
});
}
let container = document.querySelector(".livehouse")
function setUpQuery() {
const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const parameters = {
url: encodeURIComponent('https://www.hopdurable.fr/')
};
let query = `${api}?`;
for (key in parameters) {
query += `${key}=${parameters[key]}`;
}
return query;
}
function showInitialContent(id) {
container.innerHTML = '';
const title = document.createElement('h2');
title.textContent = 'Live result';
container.appendChild(title);
const page = document.createElement('p');
page.textContent = `URl testée: ${id}`;
container.appendChild(page);
}
function showCruxContent(cruxMetrics) {
const cruxHeader = document.createElement('h2');
cruxHeader.textContent = "Chrome User Experience Report Results";
container.appendChild(cruxHeader);
for (key in cruxMetrics) {
const p = document.createElement('p');
p.textContent = `${key}: ${cruxMetrics[key]}`;
container.appendChild(p);
}
}
function showLighthouseContent(lighthouseMetrics) {
const lighthouseHeader = document.createElement('h2');
lighthouseHeader.textContent = "Lighthouse Results";
container.appendChild(lighthouseHeader);
for (key in lighthouseMetrics) {
const p = document.createElement('p');
p.textContent = `${key}: ${lighthouseMetrics[key]}`;
container.appendChild(p);
}
}