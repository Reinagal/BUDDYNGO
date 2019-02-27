class Event < ApplicationRecord
  belongs_to :user
  belongs_to :theme
  has_many :event_users
  has_many :polls
end
