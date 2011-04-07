class Mandate < ActiveRecord::Base

  has_many :interviews
  accepts_nested_attributes_for :interviews
  
  def new_interview_attributes=new_attributes
    new_attributes.each do |record|
    interviews.build(record)
  end
  end

end
