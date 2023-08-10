  Feature: Display exercise content
    As Mohammad, a retiree, I want to be able to navigate to the lesson exercise after I have completed a lesson
    so that I can reinforce my learning.

    Background:
      Given I am logged in as Mohammad
      And I am at the exercise page

    Scenario: Going to exercise page from lesson complete page
      Given I am at the lesson completion page
      When I click on the Test Your Understanding button
      Then I should be on the exercise page

    Scenario: Submission button is disabled when text box is empty
      Given I see a text box to type in my answer
      When I do not type in anything in the text box
      Then I should see that the submit exercise button is disabled

    Scenario: Submission confirmation message to avoid unintended answers
      Given I type in an unintended answer in the text box
      And I see that the submit exercise button is enabled
      When I press the submit exercise button
      Then I should see a message to tell me if I want to confirm my answer
      And I can press the cancel button to cancel my submission

    Scenario: Submission of intended answer
      Given I type in an intended answer in the text box
      And I press the submit exercise button
      When I press the confirm button on the confirmation message
      Then I should see my answer in the answer box
      And I should see a confirmation message that my answer is submitted

    Scenario: AI response is displayed
      Given I have submitted and confirmed my answer
      Then I should see the AI response in the AI response box

    Scenario: Resubmission of my answer
      Given I have submitted and confirmed my answer
      And I see an AI response
      When I click on the resubmit exercise button
      Then I should be able to resubmit my answer

    Scenario: Viewing of previous answer and AI response upon returning to exercise page
      Given I have submitted and confirmed my answer
      And I see an AI response
      When I go to the lesson completion page
      And I return to the exercise page
      Then I should see my previous answer in the text box as a placeholder
      And I should see the previous AI response




