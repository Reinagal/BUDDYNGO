class AddDestinationRankingToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :destination_ranking, :string
  end
end
