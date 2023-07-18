Feature: Display lesson content

  As Aloysius, a student learner, I want to be able to see my lesson notes
  so that I will be able to continue learning by myself and go to physical lessons prepared with the content

  Background:
    Given I am logged in

  Scenario: Basic lesson view
    Given I am at the lessons pathway page
    When I click on a lesson node
    Then I should go to the lesson view page

  Scenario: Video viewing in lesson view
    Given I am at the lesson view page
    When I click on the embedded lesson video
    Then I should see the video play

  Scenario: Next page in lesson view
    Given I am at the lesson view page
    And I see the first page content
    When I click on the right arrow button
    Then I should see the second page content

  Scenario: Previous page in lesson view
    Given I am at the lesson view page
    And I see the second page content
    When I click on the left arrow button
    Then I should see the first page content

  Scenario: No respective arrows in lesson view
    Given I am at the lesson view page
    When I see the first page content
    Then I should not see the left arrow button
    When I see the last page content
    Then I should not see the right arrow button

  Scenario: Bring user back to lesson pathway upon access of invalid lesson URL
    Given I am at the lessons pathway page
    When I enter a lesson with a bogus link
    Then I should see a Page Not Found error with a redirect button
    When I click on the redirect button
    Then I should go to the lessons pathway page

  Scenario: Display of lesson completion screen
    Given I am at the lesson view page
    When I click on the Complete button
    Then I should go to the lesson completed page

  Scenario: Next Lesson button upon lesson completion
    Given I am at the lesson view page
    And I have completed the lesson
    When I click on the Next Lesson button
    Then I should visit the next lesson page
