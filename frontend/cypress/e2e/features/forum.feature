Feature: Forum functionality

  As Thomas, a working adult
  I want to be able to engage with the learning community on the platform regarding interfaith
  so that I can practice engaging in interfaith discussion

  Background:
    Given I am logged in as Thomas
    Given the forum box is open
    Given a post with the following details:
      | Title                      | Content                     | Author   |
      | Curious about Christianity | What questions do you have? | Thomas |
    Given a comment with the following details:
      | Post Title                 | Content              | Author   |
      | Curious about Christianity | I want to know more! | Aloysius |

  Scenario: Creating a post
    Given I am on the forum home page
    When I create a post with the following details:
      | Title               | Content                                  |
      | About Buddhism      | I would like to know more about Buddhism |
    # Then I should see a success message confirming the post creation
    And I should see the post on the forum home page

#wait for janessa to push post button disabled
  Scenario: No empty title
    Given I am on the forum home page
    When I try to create a post with the following details:
      | Title | Content |
      |       | Help!   |
    Then the Post button should be disabled

#wait for janessa to push post button disabled
  Scenario: No empty content
    Given I am on the forum home page
    When I try to create a post with the following details:
      | Title      | Content |
      | Oops!      |         |
    Then the Post button should be disabled

  Scenario: Viewing my new post
    Given I am on the forum home page
    When I click on the post titled About Buddhism
    Then I should see the forum post page
    And I should see no comments
    And I should see the interface to create a new comment

  Scenario: Editing my post
    Given I am on the forum post page
    And I have created a post
    When I edit my post with the following details:
      | Content                                                            |
      | I would like to know more about Buddhism. Can anyone tell me more? |
    And the content should be updated on the forum post page

  Scenario: Cannot edit a post with empty content
    Given I am on the forum post page
    And I am editing my post
    When I try to edit my post with the following details:
      | Content |
      |         |
    Then the confirm edit post button should be disabled


  Scenario: Cancelling deleting my post
    Given I am on the forum post page
    When I click the post Delete button
    Then I should see a confirmation message to confirm if I wish to delete
    When I click on the button titled Cancel
    Then I should see the forum post page
    And I should see the post on the forum home page

  Scenario: Cannot create an empty comment
    Given I am on the forum post page
    When I try to create a comment with the following details:
      | Content |
      |         |
    Then the Comment button should be disabled

  Scenario: Creating a comment
    Given I am on the forum post page
    When I create a comment with the following details:
      | Content    |
      | Well said! |
    Then I should see a success message confirming the comment creation
    And I should see the comment on the forum post page

  Scenario: Editing comments
    Given I am on the forum post page
    And I have created a comment
    When I edit my comment with the following details:
      | Content     |
      | I disagree. |
    Then I should see a success message confirming the comment edit
    And I should see the new comment on the forum post page

  Scenario: Cannot edit a comment with empty content
    Given I am on the forum post page
    When I edit my comment and clear the original content
    Then the confirm edit comment button should be disabled

  Scenario: Deleting Comment
    Given I am on the forum post page
    And I have created a comment
    When I click the button titled Delete next to my comment
    Then I should see a confirmation to delete the comment
    When I click on the button titled Delete
    Then I should see a success message confirming the comment deletion
    Then I should see the post without my comment

    Scenario: Deleting my post
    Given I am on the forum post page
    When I click the post Delete button
    Then I should see a confirmation message to confirm if I wish to delete
    When I click on the button titled Delete
    Then I should see a success message confirming the post deletion
    And I should not see the post on the forum home page

  Scenario: Cannot edit or delete another person's post
    Given I am on the forum home page
    When I click on a post titled Curious about Christianity
    Then I should see the corresponding forum post page
    And I should not see the post's Edit and Delete buttons

  Scenario: Cannot edit or delete another person's comment
    Given I am on the forum home page
    When I click on a post titled Curious about Christianity
    Then I should see the comment saying I want to know more!
    And I should not see the comment's Edit and Delete buttons

