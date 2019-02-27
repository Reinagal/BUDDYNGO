class Event < ApplicationRecord
  belongs_to :user
  belongs_to :theme, optional: true
  has_many :event_users
  has_many :polls
end
