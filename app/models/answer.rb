class Answer < ApplicationRecord
  # belongs_to :guest
  belongs_to :poll
  belongs_to :theme, optional: true
end
