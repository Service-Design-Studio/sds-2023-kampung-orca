Feature: Google login

  Scenario: Login page
    Given I am at the home page
    When I click on the Login button
    Then I should go to the login page
    And I should see Sign in with Google Button

  Scenario: Route to main page after login
    Given I am at the login page
    When I click on the button for Google login
    Then I should see the Google login popup

  #Scenario: Unauthenticated users should not access any route
  #  When I visit any page
  #  Then I should see a Not Authenticated error with a redirect button
  #  When I click on the redirect button
  #  Then I should go to the login page