class AddVoteStatusToGuest < ActiveRecord::Migration[5.2]
  def change
    add_column :guests, :status, :string, :default => "false"
  end
end
