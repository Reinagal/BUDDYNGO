class Poll < ApplicationRecord
  belongs_to :event
  has_many :choices
  has_many :answers
end
