#app/models/page_list.rb
class PageList < ActiveRecord::Base
    belongs_to :lesson_list
    has_one :page_content
end