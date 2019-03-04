class UserMailer < ApplicationMailer
  def votepush(guest)
    @guest = guest # Instance variable => available in view

    mail(to: @guest.email, subject: "Buddy'nGo - #{@guest.event.user.name} needs your vote!")
    # This will render a view in `app/views/user_mailer`!
  end

  def votepush2(guest)
    @guest = guest

    mail(to: @guest.email, subject: "Buddy'nGo - #{@guest.event.user.name} needs your 2nd vote!")
  end
end
