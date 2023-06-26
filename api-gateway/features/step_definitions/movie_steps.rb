# Add a declarative step here for populating the DB with movies.

Given(/the following movies exist/) do |movies_table|
  movies_table.hashes.each do |movie|
    Movie.create(title: movie['title'], rating: movie['rating'], release_date: movie['release_date'])
    # each returned element will be a hash whose key is the table header.
    # you should arrange to add that movie to the database here.
  end
  # fail "Unimplemented"
end

Then(/(.*) seed movies should exist/) do |n_seeds|
  Movie.count.should be n_seeds.to_i
end

# Make sure that one string (regexp) occurs before or after another one
#   on the same page

Then(/I should see "(.*)" before "(.*)"/) do |e1, e2|
  #  ensure that that e1 occurs before e2.
  #  page.body is the entire content of the page as a string.
  page_text = page.body
  expect(page_text.index(e1)).to be < page_text.index(e2)
  # fail "Unimplemented"
end

# Make it easier to express checking or unchecking several boxes at once
#  "When I uncheck the following ratings: PG, G, R"
#  "When I check the following ratings: G"

When(/I (un)?check the following ratings: (.*)/) do |uncheck, rating_list|
  array = rating_list.split(',')
  array.each do |ratings|
    if uncheck == 'un'
      uncheck('ratings_' + ratings)
    else
      check('ratings_' + ratings)
    end
  end
  # HINT: use String#split to split up the rating_list, then
  #   iterate over the ratings and reuse the "When I check..." or
  #   "When I uncheck..." steps in lines 89-95 of web_steps.rb
  # fail "Unimplemented"
end

When(/I press submit/) do
  click_button('ratings_submit')
end

Then(/I should see all the movies/) do
  # Make sure that all the movies in the app are visible in the table
  # fail "Unimplemented"
end

Then(/I should see the following movies/) do |movies_table|
  movies_table.hashes.each do |movie_data|
    within('#movies') do
      expect(page).to have_content(/\b#{movie_data['title']}\b/i)
      expect(page).to have_content(/\b#{movie_data['rating']}\b/i)
      # expect(page).to have_content(movie_data['release_date'])
    end
  end
end

Then(/I should not see the following movies/) do |movies_table|
  movies_table.hashes.each do |movie_data|
    within('#movies') do
      expect(page).not_to have_content(/\b#{movie_data['title']}\b/i)
      expect(page).not_to have_content(/\b#{movie_data['rating']}\b/i)
      # expect(page).to have_content(movie_data['release_date'])
    end
  end
end