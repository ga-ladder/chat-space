require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    config.generators do |g|
      g.javascripts false
      g.helper false
      g.test_framework false
    end
    config.i18n.default_locale = :ja
    config.time_zone ='Tokyo'
  end
end

Time::DATE_FORMATS[:default] = "%Y/%m/%d %H:%M"
