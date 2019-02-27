class Destination < ApplicationRecord
  has_many :destinations
  belongs_to :theme
end
