class GuestsController < ApplicationController
  def new
    @guest = Guest.new
    @event = current_user.events.last
    # @event = Event.find(params[:event_id])
    # @guest = @event.guests.build
  end

  def create
    @event = Event.find(params[:event_id])
    @guest = @event.guests.build(guest_params)
    @guest.event = @event
    @guest.save
    respond_to do |format|
      format.js
      format.html { redirect_to root_path }
    end
  end

  private

  def guest_params
    params.require(:guest).permit(:name, :email, :phone_number, :status)
  end
end
