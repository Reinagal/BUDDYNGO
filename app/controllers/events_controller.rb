class EventsController < ApplicationController
  def index
    @myevents = Event.all.select { |obj| obj.user_id == current_user.id }
  end
end
