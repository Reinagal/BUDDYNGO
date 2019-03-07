class SpinnersController < ApplicationController
  def show
    @event_id = params[:id]
    @poll = Poll.last
  end
end
