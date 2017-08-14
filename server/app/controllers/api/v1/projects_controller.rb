class Api::V1::ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy, :backers]
  before_action :authorize_user!, only: [:create, :update, :destroy]

  def index
    if params[:category]
      @projects = Project.by_category(params[:category])
    else
      @projects = Project.all
    end

    render json: @projects
  end

  def almost_funded
    render json: Project.almost_funded
  end

  def almost_over
    render json: Project.almost_over
  end

  def active
    render json: Project.active
  end

  def inactive
    render json: Project.inactive
  end

  def show
    render json: @project
  end

  def backers
    render json: @project.backers
  end

  def create
    @project = Project.new(project_params)
    @project.creator = current_user

    if @project.save
      render json: @project, status: :created
    else
      render json: {errors: @project.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @project.destroy
  end

  private

    def set_project
      @project = Project.find(params[:id])
    end


    def project_params
      params
        .require(:project)
        .permit(:name, :description, :funding_goal, :fund_by_date, :image, :user_id, :category_id, :campaign_content)
    end
end
