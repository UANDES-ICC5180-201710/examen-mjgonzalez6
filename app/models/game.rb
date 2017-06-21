class Game < ApplicationRecord
  validates :title, length: { minimum: 10, maximum: 50 }, presence: true, uniqueness: true
  validates :description, length: { maximum: 30 }
  validates :image_url, presence: true

end
