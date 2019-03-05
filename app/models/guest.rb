class Guest < ApplicationRecord
  belongs_to :event
  has_many :answers
  after_create :email_vote_link#, :sms_vote_link
  after_update :email_vote_2_link#, :sms_vote_2_link

  # validates :name, presence: true, length: { minimum: 5 }
  # validates :email, presence: true

  private

  def email_vote_link
    UserMailer.votepush(self).deliver_now
  end

  def email_vote_2_link
    UserMailer.votepush2(self).deliver_now
  end

  def sms_vote_link
    SendSmsService.new(self).call
  end

  def sms_vote_2_link
    SendSecondSms.new(self).call
  end
end
