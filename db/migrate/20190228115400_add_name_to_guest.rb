class AddNameToGuest < ActiveRecord::Migration[5.2]
  def change
    add_column :guests, :name, :string
  end
end
