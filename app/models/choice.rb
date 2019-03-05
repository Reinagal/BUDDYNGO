class Choice < ApplicationRecord
  belongs_to :poll
  belongs_to :theme, optional: true
  belongs_to :destination, optional: true
end
