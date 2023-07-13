Feature: Display lessons pathway

As Mohammad, a student learner, I want to be able to see how many lessons I have completed,
so that I can keep track of my learning progress.

Background:
  Given I am logged in

Scenario: View lessons pathway after selecting a topic
  Given that I am at the topic list page
  When I click on a topic
  Then I should go to the lessons pathway page

Scenario: Mouse Scroll through lessons pathway
  Given that I am at the lessons pathway page
  When I mouse scroll up and down on the lessons pathway page
  Then I will see the lessons pathway move right and left respectively.

Scenario: Entering lessons pathway from topic list
  Given that I am at the topic list page
  When I click on a topic
  Then I should go to the lessons pathway page

Scenario: Lesson Infobox appears
  Given that I am at the topic list page
  When I mouse hover on a lesson node on the lessons pathway
  Then I will see an info box for the lesson with a progress bar

Scenario: Lesson Infobox disappears
  Given that I am at the topic list page
  When I mouse hover on a lesson node on the lessons pathway
  Then I will see an info box for the lesson with a progress bar
  When I mouse hover away from the lesson node
  Then I will see the info box disappear

Scenario: Icons on the lessons pathway
  Given I am at the lessons pathway page
  Then I should see the lesson node's icon

Scenario: Pathway between lesson nodes
  Given I am at the lessons pathway page
  Then I should see the pathway between lesson nodes

Scenario: Graphics around the lessons pathway
  Given I am at the lessons pathway page
  Then I should see the graphics on the lessons pathway

  

