class EventsController < ApplicationController
  def myevents
    @myevents = Event.all.select { |obj| obj.user_id == current_user.id }
  end
end
