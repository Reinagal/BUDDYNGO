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

  def update
    @event = Event.find(params[:id])
    @event.theme = Choice.find(@event.theme_poll_outcome.max_by { |_k, v| v }[0]).theme
    @event.start_date = Choice.find(@event.date_poll_outcome.max_by { |_k, v| v }[0]).start_date
    @event.end_date = Choice.find(@event.date_poll_outcome.max_by { |_k, v| v }[0]).end_date
    @event.budget = @event.budget_poll_outcome.min_by { |k, _v| k }[0]
    @event.step = 2
    @event.save
    redirect_to root_path
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :theme, :start_date, :end_date, :step)
  end
end
