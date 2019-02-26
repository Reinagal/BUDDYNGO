class AddDestinationrakingToDestinationAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :destination_answers, :destination_ranking, :string, array: true, default: []
  end
end
