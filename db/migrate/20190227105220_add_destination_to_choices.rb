class AddDestinationToChoices < ActiveRecord::Migration[5.2]
  def change
    add_reference :choices, :destination, foreign_key: true
  end
end
