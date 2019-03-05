class CorrectReferencesEvent < ActiveRecord::Migration[5.2]
  def change
    remove_reference :events, :guest, index: true, foreign_key: true
    add_reference :events, :destination, foreign_key: true
  end
end
