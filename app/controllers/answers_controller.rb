class AnswersController < ApplicationController
  skip_before_action :authenticate_user!
  def new
    @event = Event.find(params[:event_id])
    @guest = Guest.find(params[:guest_id])
    @answer = Answer.new
  end

  def create
    @guest = Guest.find(params[:guest_id])
    @event = Event.find(params[:event_id])
    @answer = Answer.new
    @answer.poll_id = Poll.find_by(event_id: params[:event_id]).id
    @answer.budget_max = params[:answer][:budget_max]
    @answer.theme_ranking = params[:answer][:theme_ranking]
    @answer.chosen_date = params[:answer][:chosen_date_ids]
    @answer.guest_id = @guest.id
    @answer.save
    if @answer.save
      @guest.status = 1
      @guest.save
      redirect_to new_event_guest_answer_path(@event, @guest)
    else
      render :new
    end
  end

  def edit
    @event = Event.find(params[:event_id])
    @guest = Guest.find(params[:guest_id])
    @answer = Answer.find(params[:id])
  end

  def update
    @event = Event.find(params[:event_id])
    @guest = Guest.find(params[:guest_id])
    @answer = Answer.find(params[:id])
    @answer.destination_ranking = params[:answer][:destination_ranking]
    @guest.status = 2
    @guest.save
    if @answer.save && @guest.save
      redirect_to edit_event_guest_answer_path(@event, @guest, @answer)
    else
      render :edit
    end
  end

  def recap
    @event = Event.find(params[:event_id])
    @guest = Guest.find(params[:guest_id])
  end

  private

  def answer_params
    params.require(:answer).permit(:poll_id, :budget_max, :theme_ranking, :chosen_date, :destination_ranking, :guest_id)
  end
end
