class Guest < ApplicationRecord
  belongs_to :event
  has_many :answers
  after_create :send_vote_link

  private

  def send_vote_link
    UserMailer.votepush(self).deliver_now
  end
end
