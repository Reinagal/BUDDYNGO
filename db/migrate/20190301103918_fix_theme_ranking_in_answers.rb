class FixThemeRankingInAnswers < ActiveRecord::Migration[5.2]
  def change
    remove_column :answers, :destination_ranking
    add_column :answers, :destination_ranking, :string
  end
end
