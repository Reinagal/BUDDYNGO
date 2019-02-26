class CreateDestinationChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :destination_choices do |t|
      t.references :poll, foreign_key: true
      t.references :destination, foreign_key: true

      t.timestamps
    end
  end
end
