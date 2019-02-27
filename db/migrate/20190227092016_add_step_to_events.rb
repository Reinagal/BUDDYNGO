class AddStepToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :step, :integer, :default => 1
  end
end
