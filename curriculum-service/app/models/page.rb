# app/models/page.rb
class Page < ActiveRecord::Base
  # belongs_to :page_list
  # TODO: ID should be a string not integer!!
  self.primary_key = :page_id
  belongs_to :lesson
end
