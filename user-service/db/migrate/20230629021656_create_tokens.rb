class CreateTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :tokens do |t|
      t.text :token
      t.string :refresh_token
      t.string :user_id
      t.datetime :expires_at

      t.timestamps
    end
  end
end
