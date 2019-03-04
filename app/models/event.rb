class Event < ApplicationRecord
  belongs_to :user
  belongs_to :theme, optional: true
  has_many :guests
  has_many :polls

  def initialize_hash_choices(choice_type)
    hash = {}
    poll_id = Poll.find_by(event_id: id).id
    Choice.all.select { |choice| choice.poll_id == poll_id && choice.choice_type == choice_type }.each do |choice|
      hash[choice.id] = 0
    end
    return hash
  end

  def theme_poll_outcome
    hash = initialize_hash_choices("theme")
    poll_id = Poll.find_by(event_id: id).id
    Answer.all.select { |answer| answer.poll_id == poll_id }.each do |answer|
      answer.theme_ranking.split(",").each_with_index do |key, i|
        hash[key.to_i] += (hash.keys.count - i)
      end
    end
    return hash
  end

  def date_poll_outcome
    hash = initialize_hash_choices("date")
    poll_id = Poll.find_by(event_id: id).id
    Answer.all.select { |answer| answer.poll_id == poll_id }.each do |answer|
      answer.chosen_date.each_with_index do |key, i|
        hash[key.to_i] += 1
      end
    end
    return hash
  end

  def budget_poll_outcome
    hash = {}
    poll_id = Poll.find_by(event_id: id).id
    Answer.all.select { |answer| answer.poll_id == poll_id }.each do |answer|
      hash.key?(answer.budget_max) ? hash[answer.budget_max] += 1 : hash[answer.budget_max] = 1
    end
    return hash
  end

  def budget_repartition_function
    initial_hash = budget_poll_outcome
    final_hash = {}
    poll_id = Poll.find_by(event_id: id).id

    initial_hash.keys.each do |k|
      final_hash[k] = 0
      initial_hash.select { |key, _value| key >= k }.each do |_key, value|
        final_hash[k] += value
      end
    end
    return final_hash
  end
end
