  Feature: Display exercise content
    As Mohammad, a retiree, I want to be able to navigate to the lesson exercise after I have completed a lesson
    so that I can reinforce my learning.

    Background:
    Given I am logged in
    Given I am on the lesson complete page
    Given I click on the Test my Understanding button

    Scenario: Going to exercise page from lesson complete page
      Then I should be on the exercise page
      And I should see the exercise content

    Scenario: Seeing the exercise content:
      Given I am on the exercise page
      Then I should see the exercise questions

    Scenario: Able to type in an answer to the question
      Given I am on the exercise page
      Then I should see a text box to type in an answer

    Scenario: Typing in the wrong content in the text box
      Given I am on the exercise page
      And I see a submit button
      When I type in a wrong answer in the text box
      And I press the submit button
      Then I should see a message to tell me if I want to confirm my answer

    Scenario: Submission of intended answer
      Given I am on the exercise page
      When I type in an answer in the text box
      And I press the submit button
      And I press the confirm button on the confirmation message
      Then I should see my answer in the text box

    Scenario: Getting AI comments about my answer
      Given I am on the exercise page
      And I have submitted my answer
      Then I should see AI comments about my answer

    Scenario: Unable to resubmit an answer after submission
      Given I am on the exercise page
      And I have submitted my answer
      Then I should not be able to submit my answer again

    Scenario: Unable to edit my answer even after leaving the exercise page
      Given I am on the exercise page
      And I have submitted my answer
      When I leave the exercise page
      And I come back to the exercise page
      Then I should not be able submit my answer again
