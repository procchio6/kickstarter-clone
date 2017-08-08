class User < ApplicationRecord
  has_secure_password
  has_many :created_projects, class_name: :Project
  has_many :pledges
  has_many :funded_projects, through: :pledges, source: :project

  validates :email, :username, uniqueness: true
  validates :first_name, :last_name, :username, :email, presence: true
end
