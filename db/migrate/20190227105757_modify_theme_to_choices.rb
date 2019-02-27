class ModifyThemeToChoices < ActiveRecord::Migration[5.2]
  def change
    remove_column :choices, :theme
    add_reference :choices, :theme, foreign_key: true
  end
end
