class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.references :poll, foreign_key: true
      t.integer :budget_max

      t.timestamps
    end
  end
end
