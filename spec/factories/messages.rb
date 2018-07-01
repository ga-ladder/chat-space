FactoryGirl.define do
  factory :message do
    text Faker::Lorem.sentence
    # image File.open("#{Rails.root}/spec/factories/no_image.png")
    user
    group
  end
end
