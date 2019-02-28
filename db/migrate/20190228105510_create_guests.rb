class CreateGuests < ActiveRecord::Migration[5.2]
  def change
    create_table :guests do |t|
      t.references :event, foreign_key: true
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
