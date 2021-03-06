class UserMailer < ApplicationMailer
  def votepush(guest)
    @guest = guest # Instance variable => available in view
    mail(to: @guest.email, subject: "Buddy'nGo - #{@guest.event.user.name} needs your vote!")
    # This will render a view in `app/views/user_mailer`!
  end

  def votepush2(guest)
    @guest = guest
    @answer_guest = Answer.find_by(guest_id: @guest.id)
    mail(to: @guest.email, subject: "Buddy'nGo - #{@guest.name}, vote for the destination!")
  end

  def finalpush(guest)
    @guest = guest
    mail(to: @guest.email, subject: "Buddy'nGo - Your are going to #{@guest.event.destination.name}!")
  end
end
