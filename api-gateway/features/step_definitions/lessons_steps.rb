Given(/the following (.*) exist/) do |variable, table|
  case variable
  when 'topics'
    table.hashes.each do |topic|
      Topic.create(topic_id: topic['topic_id'], title: topic['title'], num_of_lessons: topic['num_of_lessons'])
    end

  when 'lessons'
    table.hashes.each do |lesson|
      Lesson.create(lesson_id: lesson['lesson_id'], topic_id: lesson['topic_id'], order_index: lesson['order_index'],title: lesson['title'])
    end
  when 'pages'
    table.hashes.each do |page|
      Page.create(page_id: page['page_id'], lesson_id: page['lesson_id'], order_index: page['order_index'], video: page['video'], words: page['words'])
    end

  when 'exercises'
    table.hashes.each do |exercise|
      exercises = exercise["qns"].split(",")
      Exercise.create(exercise_id: exercise['exercise_id'], topic_id: exercise['topic_id'], lesson_id: exercise['lesson_id'], title: exercise['title'], qns: exercises)
    end
  end
end

Given(/I am on the topics page/) do
end

Then(/(.*) seed (.*) should exist/) do |n_seeds, variable|
  case variable
  when 'topics'
    Topic.count == n_seeds.to_i

  when 'lessons'
    Lesson.count == n_seeds.to_i

  when 'pages'
    Page.count == n_seeds.to_i

  when 'exercises'
    Exercise.count == n_seeds.to_i
  end
end

# Scenario: Creation of basic lesson view
Given(/that I am at the lessons pathway page/) do
  visit("/") # While '/' is the default path for now
  # expect(page).to have_current_path("/lesson-pathway")
end

When(/I click on a lesson/) do
  lesson_button = find('button', text: /Lesson/)
  click_button(lesson_button)
end

Then(/I should see the lesson/) do
  # Implement code to verify the presence of the basic lesson view
  # Example: expect(page).to have_content("Basic Lesson View")
  expect(page).to have_content(/Complete Lesson/)
end

# Scenario: Video viewing in lesson view
Given(/that I am viewing lesson with lesson_id (.*) and at page (.*)/) do |lesson_id, page_number|
  visit lesson_path(lesson_id.to_i, page: page_number.to_i)
end

When(/I press on one of the embedded lesson videos/) do
  expect(page).to have_css('iframe[src^="https://www.youtube.com/embed/"]')
end

Then(/I should see the video play out within the website/) do
  expect(page).to have_selector('video') # Ensure the video element is present

  # Get the video element using JavaScript
  video_element = page.evaluate_script('document.querySelector("video")')

  # Check if the video is playing by accessing its 'paused' property
  is_playing = page.evaluate_script('arguments[0].paused', video_element)

  expect(is_playing).to be_falsey
end
