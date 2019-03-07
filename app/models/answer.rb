class Answer < ApplicationRecord
  belongs_to :guest
  belongs_to :poll
  belongs_to :theme, optional: true

  validates :chosen_date, presence: true
  validates :budget_max, presence: true
end
