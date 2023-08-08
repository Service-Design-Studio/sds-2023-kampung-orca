  Feature: Display exercise content
    As Mohammad, a retiree, I want to be able to navigate to the lesson exercise after I have completed a lesson
    so that I can reinforce my learning.

    Background:
      Given I am logged in
      And I am on the exercise page

    Scenario: Going to exercise page from lesson complete page
      Given I am on the lesson complete page
      When I click on the Test My Understanding button
      Then I should be on the exercise page

    Scenario: Submission button is disabled when text box is empty
      Given I see a text box to type in my answer
      When I do not type in anything in the text box
      Then I should see that the submit exercise button is disabled

    Scenario: Submission confirmation message upon pressing submit button
      Given I type in an answer in the text box
      When I press the submit exercise button
      Then I should see a message to tell me if I want to confirm my answer

    Scenario: Submission of intended answer
      Given I am on the exercise page
      When I type in an intended answer in the text box
      And I press the submit button
      And I press the confirm button on the confirmation message
      Then I should see my answer
      And I should see an infobox to say that I have submitted my answer

    Scenario: Getting AI response about my answer
      Given I have submitted and confirmed my answer
      When I see an empty AI response
      Then I should see a loading spinner while waiting for an AI response

    Scenario: Resubmission of my answer
      Given I have submitted and confirmed my answer
      And I see an AI response
      When I click on the resubmit exercise button
      Then I should be able to resubmit my answer

    Scenario: Viewing of previous answer and AI response upon returning to exercise page
      Given I have submitted and confirmed my answer
      And I see an AI response
      When I go to the lesson completed page
      And I return to the exercise page
      Then I should see my previous answer in the text box as a placeholder
      And I should see the previous AI response




