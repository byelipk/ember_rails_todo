class TodosController < ApplicationController
  respond_to :json

  def index
    todos = Todo.all
    if todos
      render json: todos, status: 200
    else
      render json: { errors: "Something bad happened." }, status: 422
    end
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo, status: 201
    else
      render json: { errors: "Something bad happened." }, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :is_completed)
  end
end
