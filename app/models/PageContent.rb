# app/models/page_content.rb
class PageContent < ActiveRecord::Base
    belongs_to :page_list
end