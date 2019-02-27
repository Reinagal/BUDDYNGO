class Choice < ApplicationRecord
  belongs_to :poll
  belongs_to :theme, optional: true
end
