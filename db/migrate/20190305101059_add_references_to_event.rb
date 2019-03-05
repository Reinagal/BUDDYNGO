class AddReferencesToEvent < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :theme
    remove_column :events, :destination
    add_reference :events, :theme, foreign_key: true
    add_reference :events, :guest, foreign_key: true
  end
end
