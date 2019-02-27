# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Destroying all...."

Event.destroy_all
User.destroy_all

puts "Creating Users...."

flo = User.create(name: "Florent", email: "flo@yopmail.com", password: "azerty")
nico = User.create(name: "Nicolas", email: "nico@yopmail.com", password: "azerty")

puts "Creating events...."

evg = Event.create(name: "EVG en Europe", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", theme: town, start_date: , end_date: , user: flo)
campagne = Event.create(name: "Weekend à la campagne", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", theme: countryside, start_date: , end_date: , user: nico)
ski = Event.create(name: "Weekend au ski", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", theme: ski, start_date: , end_date: , user: flo)
sea = Event.create(name: "Weekend à la mer", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", theme: sea, start_date: , end_date: , user: nico)

puts "all seeded!"
