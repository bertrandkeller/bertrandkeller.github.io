task :build => ["build:prod"]
namespace :build do

  desc "Regenerate files for production"
  task :prod do
    puts "* Regenerating files for production... first time"
    puts "rvm install ruby-2.3.0"
    puts "rvm use ruby-2.3.0"
    system "bundle exec jekyll build"
    puts "* Finish"
  end

  desc "Regenerate files for production (Windows systems)"
  task :win do
    puts "* Regenerating files for production..."
    system "bundle exec jekyll build"
  end

  desc "Regenerate files for development"
  task :dev do
    puts "* Regenerating files for development..."
    system "bundle exec jekyll serve -L --limit_posts 5 --incremental --profile --config _config.yml,_config_dev.yml --profile"
  end

  desc "Regenerate files and drafts for development"
  task :drafts do
    puts "* Regenerating files and drafts for development..."
    system "bundle exec jekyll build --config _config.yml,_config.dev.yml --profile --drafts"
  end
end
