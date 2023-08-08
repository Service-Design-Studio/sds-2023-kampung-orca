class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: false do |t|
      t.string :user_id, null: false, index: { unique: true }, primary_key: true
      t.string :email
      t.string :name

      t.timestamps
    end
  end
end
