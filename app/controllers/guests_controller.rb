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
    if @guest.save
      respond_to do |format|
        format.js
        format.html { redirect_to root_path }
      end
    else
      respond_to do |format|
        format.js
        format.html { redirect_to root_path }
      end
    end
  end


  def destroy
    guest = Guest.find(params[:id])
    @guest_id = guest.id
    @guest_destroyed = false

    if guest.destroy!
      @guest_destroyed = true
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.js
      end
    end
  end

  private

  def guest_params
    params.require(:guest).permit(:name, :email, :phone_number, :status)
  end
end
