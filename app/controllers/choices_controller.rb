class ChoicesController < ApplicationController

  def show
    @event = Event.find(params[:id])
  end

  def create
    @choice = Choice.new(choice_params)
    @poll = Poll.find(params[:poll_id])
    @choice.poll = @poll
    @event = @choice.poll.event
    @choice.choice_type = "date"

    if @choice.save
      respond_to do |format|
        format.js
        format.html { redirect_to root_path }
      end
    else
      render :new
    end
  end

  def createthemeschoices
    params[:theme_ids].each do |theme_id|
      @choice = Choice.new
      @poll = Poll.find(params[:poll_id])
      @choice.poll = @poll
      @event = @choice.poll.event
      @choice.choice_type = "theme"
      @choice.theme_id = theme_id
      if @choice.save
        respond_to do |format|
        format.js
        format.html { redirect_to root_path }
        end
      else
      render :new
      end
    end
  end

  def create_destination_choices

    @poll = Poll.find(params[:poll_id])
    @event = @poll.event
    params[:answer][:destination_ids].each do |destination_id|
      @choice = Choice.new
      @choice.poll = @poll
      @event = @choice.poll.event
      @choice.choice_type = "destination"
      @choice.destination_id = destination_id
      @choice.save
      @event.step = 2
      @event.save
    end
    redirect_to event_path(@event)
  end

  def newdestinationchoices
    @poll = Poll.find(params[:poll_id])
    @event = @poll.event
  end

  def destroy
    choice = Choice.find(params[:id])
    @choice_id = choice.id
    @choice_destroyed = false

    if choice.destroy!
      @choice_destroyed = true
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

  def choice_params
    params.require(:choice).permit(:start_date, :end_date, :destination_id, :theme_id)
  end

  def themes_choices_params
    params.permit(:theme_ids)
  end
end
