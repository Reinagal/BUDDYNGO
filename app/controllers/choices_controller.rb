class ChoicesController < ApplicationController

  def show
    @event = Event.find(params[:id])
  end

  def create
    @choice = Choice.new(choice_params)
    @choice.poll = current_user.events.last.polls.last
    if @choice.save
      redirect_to :root
    else
      redirect_to :root
    end
  end

  private

  def choice_params
    params.require(:choice).permit(:choice_type, :start_date, :end_date, :destination_id, :theme_id)
  end
end
