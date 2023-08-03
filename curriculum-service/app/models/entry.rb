class Entry < ApplicationRecord
  belongs_to :exercise
  belongs_to :user
end
