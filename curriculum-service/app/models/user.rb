require 'json'
class User < ActiveRecord::Base
  self.primary_key = :user_id
  serialize :lessons_access, Array
  serialize :exercises_access, Array
end