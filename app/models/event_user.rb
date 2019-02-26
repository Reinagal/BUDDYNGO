class EventUser < ApplicationRecord
  belongs_to :event
  belongs_to :user
  has_many :answers
  has_many :destination_answers
end
