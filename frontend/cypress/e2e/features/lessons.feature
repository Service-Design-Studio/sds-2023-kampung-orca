@controller
Feature: display lesson content

  As Aloysius, a student learner, I want to be able to see my lesson notes
  so that I will be able to continue learning by myself and go to physical lessons prepared with the content

  Background: lesson have been added to database
    Given the following topics exist:
      | topic_id | title                | number_of_lessons |
      | 00001    | How to make friends? | 1                 |

    And the following lessons exist:
      | lesson_id | topic_id | order_index | title    |
      | 00001     | 00001    | 1           | Buddists |
      | 00002     | 00001    | 2           | Bang     |

    And the following pages exist:
      | page_id | lesson_id | order_index | video          | words                |
      | 00001   | 00001     | 1           | www.helpme.com | how do i do this?    |
      | 00003   | 00001     | 2           | www.why.com    | why do i do this?    |
      | 00004   | 00001     | 3           | www.ggwp.com   | where do i do this?  |
      | 00002   | 00001     | 4           | www.gg.com     | who do i do this?    |
      | 00005   | 00002     | 1           | www.helpme.sg  | how do i do this1?   |
      | 00007   | 00002     | 2           | www.why.sg     | why do i do this2?   |
      | 00008   | 00002     | 3           | www.ggwp.sg    | where do i do this3? |
      | 00006   | 00002     | 4           | www.gg.sg      | who do i do this4?   |

    And the following exercises exist:
      | exercise_id | topic_id | lesson_id | qns                                 |
      | 00001       | 00001    | 00001     | why am i so dumb?, what is 2 + 2? |
      | 00006       | 00001    | 00002     | what is 1 + 1?, ggwp           |

    Then 1 seed topics should exist
    And 2 seed lessons should exist
    And 8 seed pages should exist

  Scenario: Creation of basic lesson view
    Given that I am at the lessons pathway page,
    When I click on a lesson,
    Then I should see the lesson.

  Scenario: Video viewing in lesson view
    Given that I am viewing lesson with lesson_id 00001 and at page 2,
    When I press on one of the embedded lesson videos,
    Then I should see the video play out within the website.

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
