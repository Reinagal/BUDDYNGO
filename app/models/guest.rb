class Guest < ApplicationRecord
  belongs_to :event
  has_many :answers
  validates :name, presence: true
  validate :mail_or_phone_number
  validate :valid_french_phone_number
  after_create :format_phone_number

  def mail_or_phone_number
    if phone_number == "" && email == ""
      errors.add("You have to add an email or a phone number")
    end
  end

  def valid_french_phone_number
    unless phone_number.blank?
      if !phone_number.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
        errors.add(:phone_number, "Please enter a valid french phone number")
      end
    end
  end

  def format_phone_number
    unless phone_number.blank?
      stripped_phone_number = self.phone_number.gsub(' ','')
      case
        when stripped_phone_number.start_with?('+33')
          then self.update phone_number: stripped_phone_number
        when stripped_phone_number.start_with?('0033')
          then self.update phone_number: stripped_phone_number[2..-1].insert(0, '+')
        when stripped_phone_number.start_with?('06')
          then self.update phone_number: stripped_phone_number[1..-1].insert(0, '+33')
        when stripped_phone_number.start_with?('07')
          then self.update phone_number: stripped_phone_number[1..-1].insert(0, '+33')
      end
    end
  end
end
