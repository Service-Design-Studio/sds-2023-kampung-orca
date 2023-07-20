Feature: Forum functionality

  As Thomas, a working adult
  I want to be able to engage with the learning community on the platform regarding interfaith
  so that I can practice engaging in interfaith discussion

  Background:
    Given I am logged in as Thomas
    Given the forum box is open

  Scenario: Start creating a post
    When I click on the button named Create New Post
    Then I should see the interface to create a new post

  # Scenario: Cancel creating a post
  #   Given I am creating a new post
  #   When I click on the Back button
  #   Then I should see the Create New Post button

  Scenario: No empty title
    Given I am creating a new post
    When I create a post with the following details:
      | Title | Content |
      |       | Help!   |
    Then I should see an error message saying that the title cannot be empty
    And the Post button should be disabled

  Scenario: No empty content
    Given I am creating a new post
    When I create a post with the following details:
      | Title      | Content |
      | Oops!      |         |
    Then I should see an error message saying that the content cannot be empty
    And the Post button should be disabled

  Scenario: Creating a post
    Given I am creating a new post
    When I create a post with the following details:
      | Title               | Content                                          |
      | Internalised Racism | I have been struggling with internalised racism. |
    Then I should see a success message confirming the post creation
    And I should see the post on the forum home page

  Scenario: Viewing my new post
    Given I am on the forum home page
    When I click on the post titled Internalised Racism
    Then I should see the forum post page
    And I should see no comments
    And I should see the interface to create a new comment

  Scenario: Starting editing my post
    Given I am on the forum post page
    When I click on the Edit button
    Then I should see the interface to edit my post
  
  Scenario: Editing my post
    Given I am editing my post
    When I edit my post with the following details:
      | Content                                |
      | Does internalised racism really exist? |
    Then I should see a success message confirming the post edit
    And the content should be updated on the forum post page
  
  Scenario: Cannot edit a post with empty content
    Given I am editing my post
    When I edit my post with the following details:
      | Content |
      |         |
    Then the Post button should be disabled

  Scenario: Starting deleting post
    Given I am on the forum post page
    When I click on the Delete button
    Then I should see a confirmation message to confirm if I wish to delete

  Scenario: Deleting my post
    Given I am on the post deletion menu
    When I click on the button titled Delete
    Then I should see a success message confirming the post deletion
    And I should not see the post on the forum home page

  Scenario: Cancelling deleting my post
    Given I am on the post deletion menu
    When I click on the button titled Cancel
    Then I should see the forum post page
    And I should see the post on the forum home page

  Scenario: Cannot create an empty comment
    Given I am on the forum post page
    When I create a comment with the following details:
      | Content |
      |         |
    Then the Post button should be disabled

  Scenario: Creating a comment
    Given I am on the forum post page
    When I create a comment with the following details:
      | Content    |
      | Well said! |
    Then I should see a success message confirming the comment creation
    And I should see the comment on the forum post page

Feature: Disabling editing and deleting of other people's posts and comments
  Background:
    Given I am logged in as Mohammad
    Given the forum box is open
    
  Scenario: Cannot edit or delete another person's post
    Given I am on the forum home page
    When I click on a post created by another user
    Then I should see the other forum post page
    But I should not see the Edit and Delete buttons

  # Scenario: Cannot edit or delete another person's comment



  # Scenario: Editing comments
  #   Given that I have posted a comment
  #   And I am viewing that comment 
  #   When I click on the ‘edit’ button next to my comment
  #   Then I will see the interface I was viewing when I was creating my comment
  #   When I click ‘submit changes’ after finishing editing the comment
  #   Then I will be redirected to the post with my comment
  #   And I will see my comment with the new content
  #   And I will see an ‘edited’ tag next to my comment

  # Scenario: Deleting Comment
  #   Given I am viewing my comment on a post
  #   When I click the delete button next to my comment
  #   Then I should see a confirmation to delete the comment
  #   When I click on Yes
  #   Then I should see the post without my comment

  # Scenario: Commenting on Post
  #   Given I am viewing a post
  #   When I type out my comment and click on 'comment'
  #   Then I should see my comment appear below the post I am viewing

  # Scenario: Commenting on a Deleted Post
  #   Given that I am halfway through commenting on a post and it got deleted
  #   When I click on ‘comment'
  #   Then I should be informed that the post got deleted
  #   And redirected to the lesson page with the remaining posts

  #   Scenario: Editing a Comment on a Deleted Post
  #   Given that I am midway trying to edit my comment on a post and it gets deleted
  #   When I click on ‘done editing’
  #   Then I should be informed that the post got deleted
  #   And redirected to the lesson page with the remaining posts
