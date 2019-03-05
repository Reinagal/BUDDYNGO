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

  def newdestinationchoices
    @poll = Poll.find(params[:poll_id])
  end

  def destroy
    @choice = Choice.find(params[:id])
    @event = @choice.poll.event
    @choice.destroy
    if @choice.save
      respond_to do |format|
        format.js
      end
    else
    render :root
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
