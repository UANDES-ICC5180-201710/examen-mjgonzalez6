class AddDefaultValueToUsersColumn < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :is_staff, :boolean, :default => false
  end
end
