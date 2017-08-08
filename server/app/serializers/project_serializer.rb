class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :funding_goal, :fund_by_date, :image
  has_one :category
  belongs_to :creator, serializer: ProjectCreatorSerializer
  attribute :number_of_pledges
  attribute :percent_funded
  attribute :pledge_total
  attribute :days_left
end
