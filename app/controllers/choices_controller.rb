class ChoicesController < ApplicationController

  def show
    @event = Event.find(params[:id])
  end

  def create
    @choice = Choice.new(choice_params)
    @choice.poll = current_user.events.last.polls.last
    @event = @choice.poll.event
    if !@choice.start_date.nil? && !@choice.end_date.nil?
      @choice.choice_type = "date"
    elsif !@choice.theme.nil?
      @choice.choice_type = "theme"
    end
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
      @choice.poll = current_user.events.last.polls.last
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

  private

  def choice_params
    params.require(:choice).permit(:start_date, :end_date, :destination_id, :theme_id)
  end

  def themes_choices_params
    params.permit(:theme_ids)

  end
end
