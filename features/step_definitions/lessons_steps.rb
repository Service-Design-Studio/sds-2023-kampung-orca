Given /the following (.*) exist/ do |variable, table|
    case variable
    when "topics"
        table.hashes.each do |topic|
            Topic.create(topic_id: topic["topic_id"], title: topic["title"], num_of_lessons: topic["num_of_lessons"])
        end


    when "lessons"
        table.hashes.each do |lesson|
            LessonContent.create(lesson_id: lesson["lesson_id"], title: lesson["title"])
            LessonList.create(lesson_id: lesson["lesson_id"], topic_id: lesson["topic_id"], order_index: lesson["order_index"])
        end
    when "pages"
        table.hashes.each do |page|
            PageContent.create(page_id: page["page_id"], video: page["video"], words: page["words"])
            PageList.create(page_id:page["page_id"], lesson_id: page["lesson_id"], order_index: page["order_index"])
        end

    when "exercises"
        table.hashes.each do |exercise|
            ExerciseList.create(exercise_id: exercise["exercise_id"], topic_id: exercise["topic_id"], lesson_id: exercise["lesson_id"])
            ExerciseContent.create(exercise_id: exercise["exercise_id"], title: exercise["title"], qns: exercise["qns"])
        end
    end


end

Given /I am on the topics page/ do

end

Then /(.*) seed (.*) should exist/ do | n_seeds, variable|
    case variable
    when "topics"
        Topic.count == n_seeds.to_i

    when "lessons"
        LessonList.count == n_seeds.to_i

    when "pages"
        PageList.count == n_seeds.to_i

    when "exercises"
        ExerciseList.count == n_seeds.to_i
  end
end

# Scenario: Creation of basic lesson view
Given(/^that I am at the lessons contents page$/) do
    visit lessons_contents_path
  end

When(/^I click on a lesson$/) do
click_on("View Lesson")
end

Then(/^I should see the basic lesson view$/) do
# Implement code to verify the presence of the basic lesson view
# Example: expect(page).to have_content("Basic Lesson View")
expect(page).to have_content("Lesson")
end

# Scenario: Video viewing in lesson view
Given("that I am viewing lesson with lesson_id {string} and at page {int}") do |lesson_id, page_number|
    visit lesson_path(lesson_id, page: page_number)
end

When("I press on one of the embedded lesson videos") do
    find('.lesson-video').click # Checks for CSS class .lesson-video attribute
end

Then("I should see the video play out within the website") do
    expect(page).to have_selector('video') # May have to adjust the selector 'video' based on how the video elements are structured in your application.
end


