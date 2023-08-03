class Entry < ApplicationRecord
  belongs_to :exercise_id
  belongs_to :user_id
end
