  Feature: Display exercise content
    As Aloysius, a a student learner, I want to be able to navigate to the lesson exercise after I have completed a lesson
    so that I can reinforce my learning.

    Background:
    Given I am logged in as Aloysius
    And I am at the lesson completion page

      Scenario: Go to exercise page from lesson completion page
        Given I am at the lesson completion page
        When I click on the Go to exercise button
        Then I should go to the exercise page

      Scenario: Questions on the exercise page
        Given I am at the exercise page
        Then I should see a question

      Scenario: Answer input field on the exercise page
        Given I am at the exercise page
        Then I should see an answer input field

      Scenario: Submit button under the answer input field on the exercise page
        Given I am at the exercise page
        Then I should see a Submit Answer button

      Scenario: Answering questions on the exercise page
        Given I am at the exercise page
        When I create an answer with the following details:
        | Answer                  |
        | Interfaith is important |
        And I click on the Submit Answer button
        Then I should see the answer on the exercise page

      Scenario: Answering a question with a blank answer
        Given I am at the exercise page
        When I create an empty answer
        And the Submit Answer button should be disabled

      Scenario: AI gives a model answer in response to the user's answer
        Given I am at the exercise page
        And there is an answer with the following details:
        | Answer                  |
        | Interfaith is important |
        I should see the a model answer from the AI

      Scenario: User tries to click the Submit Answer button while the AI is generating a model answer
        Given I am at the exercise page
        When I create an answer with the following details:
        | Answer                                 |
        | Interfaith communication is important  |
        And I click on the Submit Answer button and see the answer on the exercise page
        Then I should see that the AI is generating a response
        And I should not be able to edit the answer





