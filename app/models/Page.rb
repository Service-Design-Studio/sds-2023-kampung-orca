# app/models/page_content.rb
class Page < ActiveRecord::Base
    #belongs_to :page_list
    self.primary_key = :page_id
    belongs_to :lesson
end