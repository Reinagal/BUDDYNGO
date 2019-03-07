class Choice < ApplicationRecord
  belongs_to :poll
  belongs_to :theme, optional: true
  belongs_to :destination, optional: true

  validate :is_date
  validate :is_theme

  def is_date
    if self.choice_type == "date"
      if self.end_date.nil?
        errors.add(:end_date, "can't be blank")
      end
      if self.start_date.nil?
        errors.add(:start_date, "can't be blank")
      end
      if self.start_date >= self.end_date
        errors.add(:end_date, "End date can't be before start date")
      end
    end
  end


  def is_theme
    if self.choice_type == "theme"
      if self.theme_id.nil?
        errors.add(:theme_id, "You have to choose one theme")
      end
    end
  end

end
