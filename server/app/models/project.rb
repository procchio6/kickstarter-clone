class Project < ApplicationRecord
  belongs_to :creator, class_name: :User, foreign_key: :user_id
  belongs_to :category
  has_many :pledges

  validates :name, :description, :funding_goal, :fund_by_date, presence: true

  def self.active
    Project.where("fund_by_date >= ?", Date.today)
  end

  def self.inactive
    Project.where("fund_by_date < ?", Date.today)
  end

  def number_of_pledges
    self.pledges.count
  end

  def pledge_total
    self.pledges.sum(:amount)
  end

  def fully_funded?
    pledge_total > funding_goal
  end

  def percent_funded
    (pledge_total / funding_goal) * 100
  end

  def active?
    Date.today <= fund_by_date
  end

  def days_left
    if active?
      (fund_by_date - Date.today).to_i
    else
      0
    end
  end

end
