Feature: Display lessons pathway
  As Mohammad, a student learner, I want to be able to see how many lessons I have completed,
  so that I can keep track of my learning progress.

  Background:
    Given I am logged in as Mohammad

  Scenario: View lessons pathway after selecting a topic
    Given I am at the topic list page
    When I click on topic 00001
    Then I should go to the lessons pathway page

  Scenario: Mouse Scroll Up through lessons pathway
    Given I am at the lessons pathway page
    When I mouse scroll up on the lessons pathway page
    Then I will see the lessons pathway move right

  Scenario: Lesson Infobox appears
    Given I am at the lessons pathway page
    When I mouse hover on a lesson node on the lessons pathway page
    Then I will see an info box for the lesson
    # Then I will see the progress bar in the info box

  Scenario: Icons on the lessons pathway
    Given I am at the lessons pathway page
    Then I should see the lesson node's icon

Scenario: Pathway between lesson nodes
    Given I am at the lessons pathway page
    Then I should see the pathway between lesson nodes

  Scenario: Add graphics around the lesson pathway
    Given I am at the lessons pathway page
    Then I should be able to see the graphics on the lessons pathway

  Scenario: Bring user back to lesson pathway upon access of invalid lesson URL
    Given I am at the lessons pathway page
    # Requires deployment
    When I make a GET request to lesson 00005
    Then I should see an error page with a button that redirects me back to the main screen

  # Scenario: Start a Lesson
  #   Given that I am viewing the list of topics,
  #   And I am viewing the info box of a lesson,
  #   When I click on Start,
  #   Then I will see the lesson page containing text and videos corresponding to the lesson.

  # Scenario: Create zig-zag pattern on the pathway** added
  # Given that I am viewing the list of topics,
  # And I am viewing the info box of a lesson,
  # When I click on Start,
  # Then I will see the lesson page containing text and videos corresponding to the lesson.
