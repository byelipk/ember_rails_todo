require 'test_helper'

class TodosControllerTest < ActionController::TestCase
  test "should get index" do
    Todo.create(title: "Example One")
    Todo.create(title: "Example Two")
    Todo.create(title: "Example Three")

    get :index, {}, {'Accept' => Mime::JSON}

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    collection = JSON.parse(response.body, symbolize_names: true)
    titles = collection[:todos].collect { |t| t[:title] }
    assert_includes titles, "Example Two"
    refute_includes titles, "Example Four"
  end

  test "should create a new todo item" do
    post :create, {todo: { title: "Example" }},
      { 'Accept' => Mime::JSON, 'Content-Type' => Mime::JSON.to_s }

    assert_equal 201, response.status
    assert_equal Mime::JSON, response.content_type

    rsp = JSON.parse(response.body, symbolize_names: true)
    todo = rsp[:todo]
    assert_equal "Example", todo[:title]
  end

  test "should not create a new todo with a nil title" do
    post :create, {todo: { title: "" }},
      { 'Accept' => Mime::JSON, 'Content-Type' => Mime::JSON.to_s }

    assert_equal 422, response.status
    assert_equal Mime::JSON, response.content_type
  end

  test "should update a todo item" do
    todo = Todo.create(title: "Example")

    post :update, {id: 1, todo: { title: "Changeup" }},
      { 'Accept' => Mime::JSON, 'Content-Type' => Mime::JSON.to_s }

    assert_equal 200, response.status
    assert_equal "Changeup", todo.reload.title
  end

  test "should not update a todo with an invalid title" do
    todo = Todo.create(title: "Example")

    post :update, {id: 1, todo: { title: "" }},
      { 'Accept' => Mime::JSON, 'Content-Type' => Mime::JSON.to_s }

    assert_equal 422, response.status
  end

  test "should destroy a todo" do
    todo = Todo.create(title: "Example")

    delete :destroy, {id: todo.id}, {'Accept' => Mime::JSON}

    assert_equal 204, response.status
  end
end
