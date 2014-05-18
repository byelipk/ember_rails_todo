require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  test "new todo name should be empty" do
    todo = Todo.new
    assert_equal nil, todo.title
  end

  test "new todo should not save without title" do
    todo = Todo.new
    assert_not todo.save, "Saved todo without a title"
  end

  test "new todo should not be completed" do
    todo = Todo.new
    assert_equal false, todo.is_completed?
  end

  test "can set a new title" do
    todo = Todo.new
    todo.title = "Example"
    assert_equal "Example", todo.title
  end

  test "can toggle #is_completed" do
    todo = Todo.new
    todo.is_completed = true
    assert_equal true, todo.is_completed?
  end

  test "a todo with a title is valid" do
    todo = Todo.new
    todo.title = "Example"
    assert_equal true, todo.save
  end
end
