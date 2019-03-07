require 'twilio-ruby'

class SendFinalSms
  def initialize(guest)
    @guest = guest
  end

  def call
    account_sid = ENV['TWILIO_SID']

    auth_token = ENV['TWILIO_TOKEN']

    client = Twilio::REST::Client.new(account_sid, auth_token)

    from = ENV['TWILIO_NUMBER']

    to = @guest.phone_number # Guest mobile phone number

    host = ENV["HOST"] || "localhost:3000"
    url = Rails.application.routes.url_helpers.recap_event_guest_answers_url(@guest.event, @guest, host: host)

    client.messages.create(
      from: from,
      to: to,
      body: "Hey #{@guest.name}, #{@guest.event.name} votes are now over: Your friends and you decided to go to #{@guest.event.destination.name}! Click here for the full recap: #{url} - Buddy'nGo"
    )
  end
end
