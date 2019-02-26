class DestinationAnswer < ApplicationRecord
  belongs_to :event_user
  belongs_to :poll
end
