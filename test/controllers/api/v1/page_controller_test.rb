require "test_helper"

class Api::V1::PageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_page_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_page_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_page_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_page_destroy_url
    assert_response :success
  end
end
