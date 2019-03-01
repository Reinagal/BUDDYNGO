class AnswersController < ApplicationController
  skip_before_action :authenticate_user!
  def new
    @event = Event.find(params[:event_id])
    @guest = Guest.find(params[:guest_id])
    @answer = Answer.new
  end

  def create
    @answer = Answer.new(c_params)
    if @cocktail.save
      redirect_to cocktail_path(@cocktail)
    else
      render :new
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:poll_id, :budget_max, :theme_ranking, :chosen_date, :destination_ranking, :guest_id)
  end
end
