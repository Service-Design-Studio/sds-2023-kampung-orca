Feature: AI Reply to Posts and Comments in Forum

As Mohammad, a retiree, I want to have constant engagement with the posts or comments that I write,
so that I will be encouraged to participate actively in discussions.

Background:
  Given I am logged in as Mohammad
  Given the forum box is open
  Given a post with the following details:
      | Title                      | Content                     | Author   |
      | Curious about Christianity | What questions do you have? | Mohammad |

Scenario: AI Reply to an empty post
  Given I am on the forum post page
  When the post has no comments
  And the post is 3 days old
  Then I should see the latest comment is an AI comment

Scenario: AI Reply to a post with old comments
  Given I am on the forum post page
  When the post has at least 1 comment
  And the latest non-AI comment is 3 days old
  Then I should see the latest comment is an AI comment

Scenario: AI does not reply to itself
  Given I am on the forum post page
  When the latest comment is an AI comment
  Then I should not see the second latest comment is an AI comment