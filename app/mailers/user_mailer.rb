class UserMailer < ApplicationMailer
  def votepush(user)
    @user = user  # Instance variable => available in view

    mail(to: @user.email, subject: 'Testing votes pushes')
    # This will render a view in `app/views/user_mailer`!
  end
end
