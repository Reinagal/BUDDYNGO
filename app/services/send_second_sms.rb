require 'twilio-ruby'

class SendSecondSms
  def initialize(guest)
    @guest = guest
  end

  def call
    account_sid = ENV['TWILIO_SID']

    auth_token = ENV['TWILIO_TOKEN']

    client = Twilio::REST::Client.new(account_sid, auth_token)

    from = ENV['TWILIO_NUMBER']

    to = @guest.phone_number # Guest mobile phone number

    answer_guest = Answer.find_by(guest_id: @guest.id)
    # answer_guest_id = answer_guest.id

    host = ENV["HOST"] || "localhost:3000"
    url = Rails.application.routes.url_helpers.edit_event_guest_answer_url(@guest.event, @guest, answer_guest, host: host)

    client.messages.create(
      from: from,
      to: to,
      body: "Hey #{@guest.name}, #{@guest.event.user.name} need you to click on this link for the final vote for #{@guest.event.name} #{url} - Buddy'nGo"
    )
  end
end
