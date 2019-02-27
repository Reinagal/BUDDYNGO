class EventsController < ApplicationController
  def index
    @myevents = Event.where(user_id: current_user.id)
  end
end
