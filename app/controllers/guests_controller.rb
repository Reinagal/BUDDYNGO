class GuestsController < ApplicationController
  def new
    @guest = Guest.new
  end

  def create
    @event = Event.find(params[:event_id])
    @guest = @event.guests.build(guest_params)
    @guest.event = @event
    @guest.save
  end

  private

  def guest_params
    params.require(:guest).permit(:name, :email, :phone_number, :status)
  end
end
