# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_01_104344) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.bigint "poll_id"
    t.integer "budget_max"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "chosen_date", default: [], array: true
    t.bigint "guest_id"
    t.string "destination_ranking"
    t.string "theme_ranking"
    t.index ["guest_id"], name: "index_answers_on_guest_id"
    t.index ["poll_id"], name: "index_answers_on_poll_id"
  end

  create_table "choices", force: :cascade do |t|
    t.bigint "poll_id"
    t.string "choice_type"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "destination_id"
    t.bigint "theme_id"
    t.index ["destination_id"], name: "index_choices_on_destination_id"
    t.index ["poll_id"], name: "index_choices_on_poll_id"
    t.index ["theme_id"], name: "index_choices_on_theme_id"
  end

  create_table "destinations", force: :cascade do |t|
    t.string "name"
    t.integer "average_daily_cost"
    t.integer "travel_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "theme_id"
    t.string "photo"
    t.index ["theme_id"], name: "index_destinations_on_theme_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "user_id"
    t.integer "budget"
    t.string "destination"
    t.date "start_date"
    t.date "end_date"
    t.string "theme"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "step", default: 1
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "guests", force: :cascade do |t|
    t.bigint "event_id"
    t.string "email"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.integer "status", default: 0
    t.index ["event_id"], name: "index_guests_on_event_id"
  end

  create_table "polls", force: :cascade do |t|
    t.date "deadline"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_polls_on_event_id"
  end

  create_table "themes", force: :cascade do |t|
    t.string "name"
    t.string "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "answers", "guests"
  add_foreign_key "answers", "polls"
  add_foreign_key "choices", "destinations"
  add_foreign_key "choices", "polls"
  add_foreign_key "choices", "themes"
  add_foreign_key "destinations", "themes"
  add_foreign_key "events", "users"
  add_foreign_key "guests", "events"
  add_foreign_key "polls", "events"
end
