class EventsController < ApplicationController
  def index
    @myevents = Event.where(user_id: current_user.id)
    @event = Event.where(user_id: current_user.id).first
  end

  def new
    @event = Event.new
  end

  def show
    @event = Event.find(params[:id])
    @poll = Poll.find_by(event_id: params[:id])
    @myevents = Event.where(user_id: current_user.id)
  end

  def create
    @event = current_user.events.build(event_params)
    @event.user = current_user
    @poll = Poll.new(event: @event)
    if @event.save && @poll.save
      respond_to do |format|
        format.js
        format.html { redirect_to root_path }
      end
    else
      render :new
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :theme, :start_date, :end_date, :step)
  end
end
