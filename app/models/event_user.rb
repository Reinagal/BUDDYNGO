class EventUser < ApplicationRecord
  belongs_to :event
  belongs_to :user
  has_many :answers
end
