@controller
Feature: display lesson content

  As Aloysius, a student learner, I want to be able to see my lesson notes
  so that I will be able to continue learning by myself and go to physical lessons prepared with the content

  Scenario: Basic lesson view
    Given I am at the lessons pathway page
    When I click on a lesson
    Then I should see the lesson

  Scenario: Video viewing in lesson view
    Given I am at a lesson view page
    When I press on one of the embedded lesson videos
    Then I should see the video play

  Scenario: Bring user back to lesson pathway upon access of invalid lesson URL
    Given that I am at the lessons list page,
    When I make a GET request to the "something something havent figure out yet" URL,
    Then I should see an error page with a button that redirects me back to the main screen.

  Scenario: Display of lesson completion screen
    Given that I am viewing lesson with lesson_id 00002 and at page 3, # to give more context or example
    When I press the Complete button,
    Then I should see a Lesson Completed screen.

  Scenario: Next Lesson button upon lesson completion
    Given that I have compleleted lesson with lesson_id 00002 and at page 3,
    And that I am at the Lesson Completed screen,
    When I press the Next Lesson button,
    Then I should see the next lesson.
