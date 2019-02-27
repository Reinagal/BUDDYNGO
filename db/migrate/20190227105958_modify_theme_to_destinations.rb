class ModifyThemeToDestinations < ActiveRecord::Migration[5.2]
  def change
    remove_column :destinations, :theme
    add_reference :destinations, :theme, foreign_key: true
  end
end
