class Project < ApplicationRecord
  belongs_to :creator, class_name: :User, foreign_key: :user_id
  belongs_to :category
  has_many :pledges

  def number_of_pledges
    self.pledges.count
  end

  def pledge_total
    self.pledges.sum(:amount)
  end
end
