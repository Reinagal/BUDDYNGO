class Poll < ApplicationRecord
  belongs_to :event
  has_many :choices
  has_many :answers
  has_many :destination_choices
  has_many :destination_answers
end
