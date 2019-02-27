class DropDestinationAnswers < ActiveRecord::Migration[5.2]
  def change
    drop_table :destination_answers
    drop_table :destination_choices
  end
end
