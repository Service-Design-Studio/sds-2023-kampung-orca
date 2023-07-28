class Post < ApplicationRecord
  belongs_to :user
  belongs_to :lesson
  has_many :comments, dependent: :destroy
end

""" -- how come we can do post.user.name when user_id is what is stored in the same table? --
When the API responds to a GET request for posts, it includes the associated user information for each post. 
This behavior is achieved by utilizing the associations defined in the models. By including the belongs_to :user 
association in the Post model and the has_many :posts association in the User model, Rails is able to automatically 
fetch the associated user information when retrieving posts.

As a result, when you access post.user.name in the ForumApp.js file, it traverses the defined associations and 
retrieves the name of the user associated with that specific post from the API response. Similarly, when accessing 
comment.user.name, it retrieves the name of the user associated with that particular comment.

In summary, the inclusion of the user's name in the API response is made possible by the associations defined between
the models. The associations allow Rails to fetch the associated user information when retrieving posts and comments, 
which is then included in the API response for consumption by the frontend application.
"""