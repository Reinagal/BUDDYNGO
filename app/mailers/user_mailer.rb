class UserMailer < ApplicationMailer
  def votepush(user)
    @guest = user # Instance variable => available in view

    mail(to: @guest.email, subject: "Buddy'nGo - #{@guest.event.user.name} needs your vote!")
    # This will render a view in `app/views/user_mailer`!
  end
end
