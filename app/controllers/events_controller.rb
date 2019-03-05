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
    @poll_dates = []
    @poll_themes = []
    @poll_budgets = []

    # Management of the dates
    @event.date_poll_outcome.each_key { |key| @poll_dates << key }
    @poll_dates.map! do |choice_id|
      "#{Choice.find(choice_id).start_date} #{Choice.find(choice_id).end_date}"
    end
    @poll_dates = @poll_dates.join("/")
    @poll_dates_value = []
    @event.date_poll_outcome.each_value { |value| @poll_dates_value << value }
    @poll_dates_value = @poll_dates_value.join("/")

    # Management of the themes
    @event.theme_poll_outcome.each_key { |key| @poll_themes << key }
    @poll_themes.map! do |choice_id|
      Choice.find(choice_id).theme_id
    end
    @poll_themes.map! do |theme_id|
      Theme.find(theme_id).name
    end
    @poll_themes = @poll_themes.join("/")
    @poll_themes_value = []
    @event.date_poll_outcome.each_value { |value| @poll_themes_value << value }
    @poll_themes_value = @poll_themes_value.join("/")

    # Management of the budget
    @event.budget_repartition_function.sort.to_h.each_key { |key| @poll_budgets << key }
    @poll_budgets = @poll_budgets.join("/")

    @poll_budgets_value = []
    @event.budget_repartition_function.sort.to_h.each_value { |value| @poll_budgets_value << value }
    @poll_budgets_value = @poll_budgets_value.join("/")

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
