class FixStatusOfGuests < ActiveRecord::Migration[5.2]
  def change
    remove_column :guests, :status
    add_column :guests, :status, :integer, :default => 0
  end
end
