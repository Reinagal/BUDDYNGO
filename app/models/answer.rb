class Answer < ApplicationRecord
  belongs_to :event_user
  belongs_to :poll
  belongs_to :theme, optional: true
end
