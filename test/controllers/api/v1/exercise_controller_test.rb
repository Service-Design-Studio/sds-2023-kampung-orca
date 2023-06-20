require "test_helper"

class Api::V1::ExerciseControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_exercise_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_exercise_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_exercise_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_exercise_destroy_url
    assert_response :success
  end
end
