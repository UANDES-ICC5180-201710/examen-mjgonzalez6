class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :first_name, length: { minimum: 3,  maximum: 30 }, presence: true
  validates :last_name, length: { minimum: 3,  maximum: 30 }, presence: true
  validates :email, {
    length: { minimum: 3,  maximum: 50 },
    presence: true,
    uniqueness: true,
    confirmation: true,
    format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i,
    message: " invalido" }
  }
  def to_s
    if first_name and last_name
      return first_name + ' ' + last_name
    else
      return ''
    end
end

end
