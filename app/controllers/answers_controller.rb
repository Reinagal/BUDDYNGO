class AnswersController < ApplicationController
  skip_before_action :authenticate_user!
  def new
    @event = Event.find(params[:event_id])
    @guest = Guest.find(params[:guest_id])
    @answer = Answer.new
  end

  def create

  end
end
