class UserMailer < ApplicationMailer
  def votepush(user)
    @guest = user # Instance variable => available in view

    mail(to: @guest.email, subject: "Test")
    # This will render a view in `app/views/user_mailer`!
  end
end
