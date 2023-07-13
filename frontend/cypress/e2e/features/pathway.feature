Feature: Display lessons pathway

As Mohammad, a student learner, I want to be able to see how many lessons I have completed,
so that I can keep track of my learning progress.

Background:
  Given I am logged in

Scenario: View lessons pathway after selecting a topic
  Given that I am at the topic list page
  When I click on a topic
  Then I should go to the lessons pathway page


