Rails.application.config.middleware.insert_before 0, Rack::Cors do
  [
    ENV["FRONTEND_URL"],
    ENV["CURRICULUM_URL"],
    ENV["FORUM_URL"],
    ENV["USER_URL"],
    ENV["ML_URL"]
  ].each do |origin|
    allow do
      origins origin

      resource "*",
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: true
    end
  end
end
