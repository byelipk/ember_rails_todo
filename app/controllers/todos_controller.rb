class TodosController < ApplicationController
  respond_to :json

  def index
    @todos = Todo.all
    if @todos
      render json: @todos, status: 200
    else
      render json: { errors: "Something bad happened." }, status: 422
    end
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
