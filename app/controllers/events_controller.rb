class EventsController < ApplicationController
  def index
    @myevents = Event.where(user_id: current_user.id)
  end
  
  def new
    @event = Event.new
  end

  def create
    @event = current_user.events.build(event_params)
    if @event.save
      redirect_to @event
    else
      render :new
    end
  end
  
private

  def event_params
    params.require(:event).permit(:name, :description, :theme, :start_date, :end_date, :step)
  end

end




