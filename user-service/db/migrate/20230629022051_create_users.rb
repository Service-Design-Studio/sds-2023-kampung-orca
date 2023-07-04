class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: false, primary_key: :user_id do |t|
      t.string :user_id, unique: true
      t.string :email
      t.string :name

      t.timestamps
    end
    add_index :users, :user_id,unique: true
  end
end
