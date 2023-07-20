class AddSectionsToPages < ActiveRecord::Migration[7.0]
  def change
    add_column :pages, :sections, :json
  end
end
