source 'https://rubygems.org'

require 'json'
require 'open-uri'


versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
#gem 'mini_magick'
#gem 'autoprefixer-rails'
#gem 'uglifier'

group :development do
    gem 'foreman'
    #gem "hpricot"
    #gem "open_uri_redirections"
end

group :test do
    gem 'rake'
    gem 'jekyll', versions['jekyll']
    gem 'html-proofer'
end

group :jekyll_plugins do
  gem 'jekyll-paginate'
  #gem 'jekyll-assets', github: 'jekyll/jekyll-assets'
  #gem 'jekyll-sitemap', github: 'jekyll/jekyll-sitemap'
end
