def initialize_hash_choices(poll_id, choice_type)
  hash = {}
  Choice.all.select { |choice| choice.poll_id == poll_id && choice.choice_type == choice_type }.each do |choice|
    hash[choice.id] = 0
  end
  return hash
end

# assuming we work on our very first poll
# initialize_hash_choices(1, 1) => all themes choices as key with 0 as value
# initialize_hash_choices(1, 2)=> all dates choices as key with 0 as value

def themes_poll_outcome(poll_id)
  hash = initialize_hash_choices(poll_id, 1) # assuming types = type 1
  Answer.all.select { |answer| answer.poll_id == poll_id }.each do |answer|
    answer.theme.each_with_index do |choice, i|
      hash[choice.id] += (hash.keys.count - i)
    end
  end
  return hash
end

def dates_poll_outcome(poll_id)
  hash = initialize_hash_choices(poll_id, 2) # assuming dates = type 2
  Answer.all.select { |answer| answer.poll_id == poll_id }.each do |answer|
    answer.choosen_dates.each do |choice|
      hash[choice.id] += 1
    end
  end
  return hash
end

def budget_poll_outcome(poll_id)
  hash1 = {}
  hash2 = {}

  Answer.all.select { |answer| answer.poll_id == poll_id }.each do |answer|
    hash1.key?(answer.budget_max) ? hash1[answer.budget_max] += 1 : hash1[answer.budget_max] = 1
  end

  hash1.keys.each do |k|
    hash2[k] = 0
    hash1.select { |key, _value| key >= k }.each do |_key, value|
      hash2[k] += value
    end
  end
  return hash2
end

def id_poll_winner(hash)
  hash.max_by { |_k, v| v }[0]
end

# in the appropriate controller
@event.theme = Choice.find(id_poll_winner(themes_poll_outcome(1))).theme
@event.start_date = Choice.find(id_poll_winner(dates_poll_outcome(1))).start_date
@event.end_date = Choice.find(id_poll_winner(dates_poll_outcome(1))).end_date
@event.budget =
@event.update =

def initialize_hash_destination_choices(poll_id)
  hash = {}
  DestinationChoice.all.select { |choice| choice.poll_id == poll_id }.each do |choice|
    hash[choice.id] = 0
  end
  return hash
end

def destinations_poll_outcome(poll_id)
  hash = initialize_hash_choices(poll_id, 3) # assuming destinations = type 3
  Answer.all.select { |answer| answer.poll_id == poll_id }.each do |answer|
    hash[answer.choosen_destination.id] += 1 # assuming the answer is an object Destination and not an array of one object
  end
  return hash
end

