require 'twilio-ruby'

account_sid = { twil_sid: ENV['TWILIO_SID'] }
auth_token = { twil_token: ENV['TWILIO_TOKEN'] }
client = Twilio::REST::Client.new(account_sid, auth_token)

from = { phone_number: ENV['TWILIO_NUMBER'] } # Your Twilio number
to = '+33689571444' # Your mobile phone number

client.messages.create(
  from: from,
  to: to,
  body: "Hey friend!"
)
