require 'test_helper'

class SpinnersControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get spinners_show_url
    assert_response :success
  end

end
