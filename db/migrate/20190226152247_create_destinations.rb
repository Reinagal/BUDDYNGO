class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.string :theme
      t.string :name
      t.integer :average_daily_cost
      t.integer :travel_cost

      t.timestamps
    end
  end
end
