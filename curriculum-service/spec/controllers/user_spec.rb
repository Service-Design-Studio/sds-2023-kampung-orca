require 'rails_helper'

RSpec.describe UserController, type: :controller do

  describe "POST #create" do
    it "creates a new record" do
      expect {
        post :create, params: {user_id: "1234"}
      }.to change(User, :count).by(1)
    end
  end
end