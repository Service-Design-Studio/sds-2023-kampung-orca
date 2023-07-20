Feature: AI Reply to Posts and Comments in Forum

As Mohammad, a retiree, I want to have constant engagement with the posts or comments that I write,
so that I will be encouraged to participate actively in discussions.

Background:
  Given I am logged in

Scenario: AI Reply to a post
  Given I am in the lesson view page #common
  When I click on the forum button #commmon
  Then I should see an existing post #specific
  When I click on the post
  Then I should see that the post has not been replied to for more than 3 days
  Then I should see an AI comment replying to it

Scenario: AI Reply to a comment
  Given I am in the lesson view page #common
  When I click on the forum button #commmon
  Then I should see an existing post #specific
  When I click on the post
  Then I should see an existing comment
  Then I should see that the comment has not been replied to for more than 3 days
  Then I should see an AI comment replying to it

Scenario: AI does not reply to a post with spam comments
  Given I am in the lesson view page
  When I click on the forum button
  Then I should see an existing post with spam comments
  When I click on the post
  Then I should see that the post has spam comments
  Then I should see that the last valid comment or the post has been posted for more than 3 days
  Then I should not see an AI comment replying to the last valid post or comment

Scenario: AI does not reply to itself
  Given I am in the lesson view page
  When I click on the forum button
  Then I should see an existing post with AI as the last comment #probably need to use a dif post
  When I click on the post
  Then I should see that the last comment is an AI comment
  Then I should not see an AI comment replying to it

