Feature: AI Reply to Posts and Comments in Forum

As Mohammad, a retiree, I want to have constant engagement with the posts or comments that I write,
so that I will be encouraged to participate actively in discussions.

Background:
  Given I am logged in as Mohammad
  And I am at the lessons pathway page
  And the forum box is open

Scenario: AI Reply to an empty post
  Given the post has no comments by users
  And the post is at least 3 days old
  Then I should see the latest comment is an AI comment

Scenario: AI Reply to a post with old comments
  Given the post has at least 1 comment
  And the latest non-AI comment is at least 3 days old
  Then I should see the latest comment is an AI comment

Scenario: AI does not reply to itself
  Given I am on a post that has an AI comment
  When the latest comment is an AI comment
  Then I should not see the second latest comment is an AI comment

Scenario: AI does not reply to a post with recent comments
  Given I am on a post with recent comments
  When the latest comment is a recent comment
  Then I should not see the latest comment is an AI comment

Scenario: AI does not reply to a recent post
  Given I am on a post that is less than 3 days old
  And the post has no comments
  Then I should not see any AI comments
