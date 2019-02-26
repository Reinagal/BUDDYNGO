class CreatePolls < ActiveRecord::Migration[5.2]
  def change
    create_table :polls do |t|
      t.date :deadline
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
