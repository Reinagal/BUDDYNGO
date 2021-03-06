class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.references :user, foreign_key: true
      t.integer :budget
      t.string :destination
      t.date :start_date
      t.date :end_date
      t.string :theme

      t.timestamps
    end
  end
end
