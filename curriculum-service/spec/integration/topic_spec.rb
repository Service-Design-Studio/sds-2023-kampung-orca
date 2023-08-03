require 'swagger_helper'

RSpec.describe 'topic', type: :request do

  path '/topic' do

    get('list topics') do
      response(200, 'successful') do
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    post('create topic') do
      parameter name: 'topic_id', in: :query, type: :string, description: 'topic_id'
      parameter name: 'title', in: :query, type: :string, description: 'title'
      response(200, 'successful') do
        consumes 'application/json'
        let(:topic_id) { '123' }
        let(:title){"Sample Lesson"}
        example 'application/json', :example_body, {
          topic_id: "00001",
          title: 'Hello world!',
          lessons_count: 5
        }
      run_test!
      end   
    end
  end

  path '/topic/{topic_id}' do
    # You'll want to customize the parameter types...
    parameter name: 'topic_id', in: :path, type: :string, description: 'topic_id'
    get('show topic') do
      response(200, 'successful') do
        let(:topic_id) { '123' }
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    delete('delete topic') do
      response(200, 'successful') do
        let(:topic_id) { '123' }
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
