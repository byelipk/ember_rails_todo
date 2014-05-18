require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  test "new todo name should be empty" do
    todo = Todo.new
    assert_equal nil, todo.title
  end

  test "should not save without title" do
    todo = Todo.new
    assert_not todo.save, "Saved todo without a title"
  end
end
