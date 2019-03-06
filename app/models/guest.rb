class Guest < ApplicationRecord
  belongs_to :event
  has_many :answers
  # validates :name, presence: true, length: { minimum: 5 }
  # validates :email, presence: true
end
