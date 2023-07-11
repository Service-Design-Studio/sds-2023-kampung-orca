Feature: Google login

  Scenario: Route to main page after login
    Given I am at the login page
    When I click on the Google login button
    Then I should see the Google login popup

  Scenario: Unauthenticated users should not access any route
    Given I am not logged in
    When I visit any page
    Then I should see a Not Authenticated error with a redirect button
    When I click on the redirect button
    Then I should go to the login page