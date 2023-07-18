Feature: Forum
  As Thomas, a working adult,
  I want to be able to engage with the learning community on the platform regarding interfaith,
  so that I can practice engaging in interfaith discussion.

  Scenario: Viewing forum box 
    Given I am at the lesson view page
    When I click on the Forum button
    Then I should see the forum view

  Background:
    Given the forum box is open 
  
  Scenario: Posting new thread 
    When I click on the New Post button
    Then I should see the New Post inputs
    When I enter new post details
    And I click on the Send button
    Then I should see the new post 

  Examples:
    | title       | content         |
    | Test        | Testing 1 2 3!  |

  Scenario: Editing post 
    When I click on the Edit button on the new post
    Then I should see the Edit Post inputs
    When I have edited the post to my liking
    And click on the button that says ‘done editing’
    Then my post should be updated and reflected publicly as an edited post

  Scenario: Deleting post 
    Given that I want to delete my post
    When I click on delete on my own post
    Then I should see a confirmation message to confirm if I wish to delete
    When I click on ‘yes’ to confirm
    Then my post should be deleted

  Scenario: Viewing posts
    Given that I wish to view a post
    When I click on the title of that post
    Then I should be able to see the post and all comments

  Scenario: Viewing deleted posts
    Given that I am viewing the list of posts
    When I click on a post
    And that post has been deleted prior to my click,
    Then I will see an error message notifying me that the post no longer exists
    And I will be redirected to the list of posts

  Scenario: Editing comments
    Given that I have posted a comment
    And I am viewing that comment 
    When I click on the ‘edit’ button next to my comment
    Then I will see the interface I was viewing when I was creating my comment
    When I click ‘submit changes’ after finishing editing the comment
    Then I will be redirected to the post with my comment
    And I will see my comment with the new content
    And I will see an ‘edited’ tag next to my comment

  Scenario: Deleting Comment
    Given I am viewing my comment on a post
    When I click the delete button next to my comment
    Then I should see a confirmation to delete the comment
    When I click on Yes
    Then I should see the post without my comment

  Scenario: Commenting on Post
    Given I am viewing a post
    When I type out my comment and click on 'comment'
    Then I should see my comment appear below the post I am viewing

  Scenario: Commenting on a Deleted Post
    Given that I am halfway through commenting on a post and it got deleted
    When I click on ‘comment
    Then I should be informed that the post got deleted 
    And redirected to the lesson page with the remaining posts

  Scenario: Editing a Comment on a Deleted Post
  Given that I am midway trying to edit my comment on a post and it gets deleted
  When I click on ‘done editing’
  Then I should be informed that the post got deleted 
  And redirected to the lesson page with the remaining posts