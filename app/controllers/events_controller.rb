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
    @poll_destinations = []

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
    @event.theme_poll_outcome.each_value { |value| @poll_themes_value << value }
    @poll_themes_value = @poll_themes_value.join("/")

    # Management of the budget
    @event.budget_repartition_function.sort.to_h.each_key { |key| @poll_budgets << key }
    @poll_budgets = @poll_budgets.join("/")

    @poll_budgets_value = []
    @event.budget_repartition_function.sort.to_h.each_value { |value| @poll_budgets_value << value }
    @poll_budgets_value = @poll_budgets_value.join("/")

    # Management of the destinations
    if @poll.answers.select { |answer| !answer.destination_ranking.nil? } != []
      @event.destination_poll_outcome.each_key { |key| @poll_destinations << key }
      @poll_destinations.map! do |choice_id|
        Choice.find(choice_id).destination_id
      end
      @poll_destinations = @poll_destinations.join("/")
      @poll_destinations_value = []
      @event.destination_poll_outcome.each_value { |value| @poll_destinations_value << value }
      @poll_destinations_value = @poll_destinations_value.join("/")
    end
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

  def finish_guest_invits
    @event = Event.find(params[:id])
    # SMS and email send 1 :
    @event.guests.each do |guest|
      UserMailer.votepush(guest).deliver_now unless guest.email.nil? || guest.email == ""
      SendSmsService.new(guest).call unless guest.phone_number.nil? || guest.phone_number == ""
    end
    redirect_to event_path(@event)
  end

  def update
    @event = Event.find(params[:id])
    @poll = Poll.find_by(event_id: @event.id)
    if @event.step == 1
      @event.theme = Choice.find(@event.theme_poll_outcome.max_by { |_k, v| v }[0]).theme
      @event.start_date = Choice.find(@event.date_poll_outcome.max_by { |_k, v| v }[0]).start_date
      @event.end_date = Choice.find(@event.date_poll_outcome.max_by { |_k, v| v }[0]).end_date
      @event.budget = @event.budget_poll_outcome.min_by { |k, _v| k }[0]
      @event.step = 2
      @event.save
      redirect_to newdestinationchoices_poll_choices_path(@poll)
    elsif @event.step == 2
      @event.destination = Choice.find(@event.destination_poll_outcome.max_by { |_k, v| v }[0]).destination
      @event.step = 3
      @event.save
      redirect_to event_path(@event)
    else
      redirect_to root_path
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :theme, :start_date, :end_date, :step, :destination, :budget)
  end
end
