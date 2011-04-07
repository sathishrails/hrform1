class Interview < ActiveRecord::Base
  belongs_to :mandate
  has_many :applicants
  accepts_nested_attributes_for :applicants
end
