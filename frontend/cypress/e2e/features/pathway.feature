Feature: Display lessons pathway
  As Mohammad, a student learner, I want to be able to see how many lessons I have completed,
  so that I can keep track of my learning progress.

  Background:
    Given I am logged in as Mohammad

  Scenario: View lessons pathway after selecting a topic
    Given I am at the topic list page
    When I click on topic 00001
    Then I should go to the lessons pathway page

  Scenario: Mouse Scroll through lessons pathway
    Given I am at the lessons pathway page
    When I mouse scroll up on the lessons pathway page
    Then I will see the lessons pathway move right

  Scenario: Lesson Infobox appears on mouse hover of lesson node
    Given I am at the lessons pathway page
    When I mouse hover on a lesson node on the lessons pathway page
    Then I will see an info box for the lesson

  Scenario: Icons on the lessons pathway as links to the lessons
    Given I am at the lessons pathway page
    Then I should see the lesson node's icon

  Scenario: Pathway between lesson nodes
    Given I am at the lessons pathway page
    Then I should see the pathway between lesson nodes

  Scenario: Graphics around the lesson pathway
    Given I am at the lessons pathway page
    Then I should be able to see the graphics on the lessons pathway

  Scenario: Bring user back to lesson pathway upon access of invalid lesson URL
    Given I am at the lessons pathway page
    When I make a GET request to lesson 00005
    Then I should see an error page with a button that redirects me back to the main screen

  Scenario: Show lesson in progress
    Given I am at the lessons pathway page
    When I mouse hover on an in progress lesson node on the lessons pathway page
    Then I will see that the lesson is in progress

  Scenario: Show lesson is completed
    Given I am at the lessons pathway page
    When I mouse hover on a completed lesson node on the lessons pathway page
    Then I will see that the lesson is completed

  Scenario: Show lesson is locked
    Given I am at the lessons pathway page
    When I mouse hover on a locked lesson node on the lessons pathway page
    Then I will see that the lesson is locked
    And I will not be able to click on the lesson node
