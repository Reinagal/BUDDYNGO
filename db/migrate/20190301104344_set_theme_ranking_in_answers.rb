class SetThemeRankingInAnswers < ActiveRecord::Migration[5.2]
  def change
    remove_column :answers, :theme_ranking
    add_column :answers, :theme_ranking, :string
  end
end
