class EventsController < ApplicationController
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
end

private

def event_params
  params.require(:event).permit(:name, :description, :theme, :start_date, :end_date)
end
