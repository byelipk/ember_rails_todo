# == Schema Information
#
# Table name: todos
#
#  id           :integer          not null, primary key
#  title        :string(255)
#  is_completed :boolean
#  created_at   :datetime
#  updated_at   :datetime
#

class Todo < ActiveRecord::Base
end
