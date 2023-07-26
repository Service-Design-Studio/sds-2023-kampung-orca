require 'rails_helper'

RSpec.describe "Lessons", type: :request do
  describe "GET /lessons" do
    it "returns a successful response" do
      get "/lessons"
      expect(response).to have_http_status(200)
    end

    it "returns JSON containing all lessons" do
      lesson1 = Lesson.create(title: "Lesson 1")
      lesson2 = Lesson.create(title: "Lesson 2")

      get "/lessons"
      expect(response).to have_http_status(200)
      expect(response.content_type).to include("application/json")

      lessons_json = JSON.parse(response.body)
      expect(lessons_json).to be_an(Array)
      expect(lessons_json.size).to eq(2)
      expect(lessons_json[0]["title"]).to eq(lesson1.title)
      expect(lessons_json[1]["title"]).to eq(lesson2.title)
    end
  end

  describe "GET /lessons/:id" do
    it "returns a successful response with JSON containing a specific lesson" do
      lesson = Lesson.create(title: "Test Lesson")

      get "/lessons/#{lesson.id}"
      expect(response).to have_http_status(200)
      expect(response.content_type).to include("application/json")

      lesson_json = JSON.parse(response.body)
      expect(lesson_json).to be_a(Hash)
      expect(lesson_json["title"]).to eq(lesson.title)
    end

    it "returns a 404 status code for non-existent lesson" do
      get "/lessons/12345"
      expect(response).to have_http_status(404)
      expect(response.content_type).to include("application/json")

      error_json = JSON.parse(response.body)
      expect(error_json).to be_a(Hash)
      expect(error_json["error"]).to eq("Lesson not found")
    end
  end

  describe "POST /lessons" do
    it "creates a new lesson and returns a 201 status code with the lesson details" do
      lesson_params = { lesson: { title: "New Lesson Title" } }

      # Send a POST request with the lesson_params
      post "/lessons", params: lesson_params

      expect(response).to have_http_status(201)
      expect(response.content_type).to include("application/json")

      lesson = Lesson.last
      lesson_json = JSON.parse(response.body)
      expect(lesson_json).to be_a(Hash)
      expect(lesson_json["id"]).to eq(lesson.id)
      expect(lesson_json["title"]).to eq(lesson.title)
    end

    it "returns a 422 status code with errors for invalid lesson creation" do
      invalid_lesson_params = { lesson: { title: "" } }

      # Send a POST request with invalid_lesson_params
      post "/lessons", params: invalid_lesson_params

      expect(response).to have_http_status(422)
      expect(response.content_type).to include("application/json")

      error_json = JSON.parse(response.body)
      expect(error_json).to be_a(Hash)
      expect(error_json["title"]).to include("can't be blank")
    end
  end

  describe "PUT /lessons/:id" do
    let!(:lesson) { Lesson.create(title: "Initial Title") }

    it "updates an existing lesson and returns a 200 status code with the updated lesson details" do
      updated_lesson_params = { lesson: { title: "Updated Lesson Title" } }

      # Send a PUT request with the updated_lesson_params
      put "/lessons/#{lesson.id}", params: updated_lesson_params

      expect(response).to have_http_status(200)
      expect(response.content_type).to include("application/json")

      lesson.reload
      lesson_json = JSON.parse(response.body)
      expect(lesson_json).to be_a(Hash)
      expect(lesson_json["id"]).to eq(lesson.id)
      expect(lesson_json["title"]).to eq(lesson.title)
    end

    it "returns a 422 status code with errors for invalid lesson update" do
      invalid_lesson_params = { lesson: { title: "" } }

      # Send a PUT request with invalid_lesson_params
      put "/lessons/#{lesson.id}", params: invalid_lesson_params

      expect(response).to have_http_status(422)
      expect(response.content_type).to include("application/json")

      error_json = JSON.parse(response.body)
      expect(error_json).to be_a(Hash)
      expect(error_json["title"]).to include("can't be blank")
    end
  end

  describe "DELETE /lessons/:id" do
    let!(:lesson) { Lesson.create(title: "Test Lesson") }

    it "destroys an existing lesson and returns a 204 status code with no content" do
      # Send a DELETE request to the lesson's endpoint
      delete "/lessons/#{lesson.id}"

      expect(response).to have_http_status(204)
      expect(response.body).to be_empty

      # Check that the lesson was actually deleted from the database
      expect { lesson.reload }.to raise_error(ActiveRecord::RecordNotFound)
    end

    it "returns a 404 status code if the lesson to delete does not exist" do
      # Send a DELETE request with an invalid lesson ID
      delete "/lessons/12345"

      expect(response).to have_http_status(404)
      response_json = JSON.parse(response.body)
      expect(response_json["error"]).to eq("Lesson not found")
    end
  end
end


