class AddThemeRankingAndChosenDateToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :theme_ranking, :string, array: true, default: []
    add_column :answers, :chosen_date, :string, array: true, default: []
  end
end
