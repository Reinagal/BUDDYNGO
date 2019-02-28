class Event < ApplicationRecord
  belongs_to :user
  belongs_to :theme, optional: true
  has_many :guests
  has_many :polls
end
