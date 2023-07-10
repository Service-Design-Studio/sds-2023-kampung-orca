Feature: Forum
  As Thomas, a working adult,
  I want to be able to engage with the learning community on the platform regarding interfaith,
  so that I can practice engaging in interfaith discussion.

  Scenario: Posting on forum
    Given I am on the chatroom page
    And another user posts a question in the chatroom
    When I click on the ‘reply’ on user post, and I type in my answer
    Then the answer should be posted on the question’s discussion page

  Scenario: Editing post
    Given I am on the chatroom page
    When I click on ‘edit’ on my own post
    Then I should see the interface that I was at when I created the post
    When I have edited the post to my liking
    And click on the button that says ‘done editing’
    Then my post should be updated and reflected publicly as an edited post