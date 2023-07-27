Feature: Display lesson content

  As Aloysius, a student learner, I want to be able to see my lesson notes
  so that I will be able to continue learning by myself and go to physical lessons prepared with the content

  Background:
    Given I am logged in as Thomas

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
    When I see the first page content
    When I click on the right arrow button
    Then I should see the second page content

  Scenario: Previous page in lesson view
    Given I am at the lesson view page
    When I click on the right arrow button
    When I see the second page content
    When I click on the left arrow button
    Then I should see the first page content

  Scenario: No left arrow in first page
    Given I am at the lesson view page
    When I see the first page content
    Then I should not see the left arrow button

  # Scenario is for three pages
  Scenario: No right arrow in last page
    Given I am at the lesson view page
    When I click on the right arrow button
    When I see the second page content
    When I click on the right arrow button
    When I see the third page content
    Then I should not see the right arrow button

  Scenario: Bring user back to lesson pathway upon access of invalid lesson URL
    Given I am at the lessons pathway page
    When I enter a lesson with a bogus link
    Then I should see a Page Not Found error
    Then I should see the Go to Home button

  # Scenario is for three pages
  Scenario: Display of lesson completion screen
    Given I am at the lesson view page
    When I click on the right arrow button
    When I see the second page content
    When I click on the right arrow button
    When I see the third page content
    When I click on the Complete Lesson button
    Then I should see the lesson completed page

  Scenario: Next Lesson button upon lesson completion
    Given I am at the lesson completion page
    When I click on the next lesson button
    Then I should go to the next lesson page
