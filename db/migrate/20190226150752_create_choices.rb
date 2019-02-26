class CreateChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.references :poll, foreign_key: true
      t.string :choice_type
      t.string :theme
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
