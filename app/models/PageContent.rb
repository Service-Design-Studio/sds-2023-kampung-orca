# app/models/page_content.rb
class PageContent < ActiveRecord::Base
    #belongs_to :page_list
    self.primary_key = :page_id

    def get_next_page(lesson_id, index)
        page = PageList.joins(:page).where(lesson_id: lesson_id, order_index: index + 1)
        return page
    end


end