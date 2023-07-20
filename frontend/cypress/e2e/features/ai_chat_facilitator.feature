Feature: AI Reply to Posts and Comments in Forum

As Mohammad, a retiree, I want to have constant engagement with the posts or comments that I write,
so that I will be encouraged to participate actively in discussions.

Background:
  Given I am logged in
  Given the forum box is open

Scenario: AI Reply to a post
  Given I see an existing post
  When I click on the post
  Then I should see that the post has not been replied to for more than 3 days
  And I should see an AI comment replying to the post

Scenario: AI Reply to a comment
  Given I see an existing post
  When I click on the post
  Then I should see a comment that has not been replied to for more than 3 days
  And I should see an AI comment replying to the comment

Scenario: AI does not reply to itself
  Given I should see an existing post with AI as the last comment
  When I click on the post
  Then I should see that the last comment is an AI comment
  And I should not see an AI comment replying to the previous AI comment

