class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :events
  has_many :event_users
  devise :invitable, :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
