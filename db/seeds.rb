# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Destroying all...."

Choice.destroy_all
p 'choice destroy'
Poll.destroy_all
p 'poll destroy'
EventUser.destroy_all
p 'eventuser destroy'
Destination.destroy_all
p 'destination destroy'
Theme.destroy_all
p 'theme destroy'
Event.destroy_all
p 'event destroy'
User.destroy_all
p 'user destroy'

puts "Creating Users...."

flo = User.create(name: "Florent", email: "flo@yopmail.com", password: "azerty")
nico = User.create(name: "Nicolas", email: "nico@yopmail.com", password: "azerty")
guigui = User.create(name: "Guillaume", email: "guigui@yopmail.com", password: "azerty")
olive = User.create(name: "Olivier", email: "olive@yopmail.com", password: "azerty")
bob = User.create(name: "Bob", email: "bob@yopmail.com", password: "azerty")
lea = User.create(name: "Lea", email: "lea@yopmail.com", password: "azerty")
joe = User.create(name: "Joe", email: "joe@yopmail.com", password: "azerty")
michel = User.create(name: "Michel", email: "michel@yopmail.com", password: "azerty")
emma = User.create(name: "Emma", email: "emma@yopmail.com", password: "azerty")
sara = User.create(name: "Sara", email: "sara@yopmail.com", password: "azerty")
julien = User.create(name: "Julien", email: "julien@yopmail.com", password: "azerty")
chloe = User.create(name: "Chloe", email: "chloe@yopmail.com", password: "azerty")
megan = User.create(name: "Megan", email: "megan@yopmail.com", password: "azerty")
peter = User.create(name: "Peter", email: "peter@yopmail.com", password: "azerty")
jean = User.create(name: "Jean", email: "jean@yopmail.com", password: "azerty")
marjorie = User.create(name: "Marjorie", email: "marjorie@yopmail.com", password: "azerty")

puts "Creating themes...."
town = Theme.create(name:"town", photo:"cityscape.png")
countryside = Theme.create(name:"countryside", photo:"countryscape.png")
ski = Theme.create(name:"ski", photo:"mountainscape.png")
sea = Theme.create(name:"sea", photo:"beachscape.png")

puts "Creating events...."
evg = Event.create(name: "EVG en Europe", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: flo)
vac = Event.create(name: "Vacances été 2019", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: nico)
pont = Event.create(name: "Pont de mai 2019", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: flo)
lesmemes = Event.create(name: "On prend les mêmes et on recommence", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: nico)

puts "Creating event_users...."
a = EventUser.create(event: evg, user:flo)
b = EventUser.create(event: evg, user:guigui)
c = EventUser.create(event: evg, user:olive)
d = EventUser.create(event: evg, user:bob)
e = EventUser.create(event: vac, user:nico)
f = EventUser.create(event: vac, user:lea)
g = EventUser.create(event: vac, user:joe)
h = EventUser.create(event: vac, user:michel)
i = EventUser.create(event: pont, user:flo)
j = EventUser.create(event: pont, user:emma)
k = EventUser.create(event: pont, user:sara)
l = EventUser.create(event: lesmemes, user:nico)
m = EventUser.create(event: lesmemes, user:julien)
n = EventUser.create(event: lesmemes, user:chloe)
o = EventUser.create(event: lesmemes, user:megan)

puts "Creating destinations...."
london = Destination.create(name: "London", theme: town, photo: "town.jpg", average_daily_cost: 107, travel_cost: 96)
copenhagen = Destination.create(name: "Copenhagen", theme: town, photo: "town.jpg", average_daily_cost: 134, travel_cost:114)
amsterdam = Destination.create(name: "Amsterdam", theme: town, photo: "town.jpg", average_daily_cost: 166, travel_cost: 100)
lisbon = Destination.create(name: "Lisbon", theme: town, photo: "town.jpg", average_daily_cost: 87, travel_cost: 146)
barcelona = Destination.create(name: "Barcelona", theme: town, photo: "town.jpg", average_daily_cost: 145, travel_cost: 108)
berlin = Destination.create(name: "Berlin", theme: town, photo: "town.jpg", average_daily_cost: 97, travel_cost: 112)
rome = Destination.create(name: "Rome", theme: town, photo: "town.jpg", average_daily_cost: 96, travel_cost: 124 )
bruxelle = Destination.create(name: "Bruxelle", theme: town, photo: "town.jpg", average_daily_cost: 91, travel_cost: 120)
lyon = Destination.create(name: "Lyon", theme: town, photo: "town.jpg", average_daily_cost: 91, travel_cost: 100)
bordeaux = Destination.create(name: "Bordeaux", theme: town, photo: "town.jpg", average_daily_cost: 82, travel_cost: 104)
cannes = Destination.create(name: "Cannes", theme: sea, photo: "beach.jpg", average_daily_cost: 144, travel_cost: 166)
calvi = Destination.create(name: "Calvi", theme: sea, photo: "beach.jpg", average_daily_cost: 174, travel_cost: 256)
deauville = Destination.create(name: "Deauville", theme: sea, photo: "beach.jpg", average_daily_cost: 157, travel_cost: 52)
biarritz = Destination.create(name: "Biarritz", theme: sea, photo: "beach.jpg", average_daily_cost: 92, travel_cost: 118)
porto_vecchio = Destination.create(name: "Porto Vecchio", theme: sea, photo: "beach.jpg", average_daily_cost: 154, travel_cost: 230)
ibiza = Destination.create(name: "Ibiza", theme: sea, photo: "beach.jpg", average_daily_cost: 148, travel_cost: 1088)
lloret = Destination.create(name: "Lloret de Mar", theme: sea, photo: "beach.jpg", average_daily_cost: 138, travel_cost: 108)
marbella = Destination.create(name: "Marbella", theme: sea, photo: "beach.jpg", average_daily_cost: 142, travel_cost: 166)
cassis = Destination.create(name: "Cassis", theme: sea, photo: "beach.jpg", average_daily_cost: 98, travel_cost: 160)
grande_motte = Destination.create(name: "La Grande-Motte", theme: sea, photo: "beach.jpg", average_daily_cost: 88, travel_cost: 95)
baule = Destination.create(name: "La Baule", theme: sea, photo: "beach.jpg", average_daily_cost: 91, travel_cost: 130)
les_2_alpes = Destination.create(name: "Les 2 Alpes", theme: ski, photo: "ski.jpg", average_daily_cost: 235, travel_cost: 225)
alpehuez = Destination.create(name: "L'Alpe d'Huez", theme: ski, photo: "ski.jpg", average_daily_cost: 250, travel_cost: 225)
courchevel = Destination.create(name: "Courchevel", theme: ski, photo: "ski.jpg", average_daily_cost: 460, travel_cost: 225)
val_thorens = Destination.create(name: "Val Thorens", theme: ski, photo: "ski.jpg", average_daily_cost: 250, travel_cost: 225)
avoriaz = Destination.create(name: "Avoriaz", theme: ski, photo: "ski.jpg", average_daily_cost: 230, travel_cost: 225)
chamonix = Destination.create(name: "Chamonix", theme: ski, photo: "ski.jpg", average_daily_cost: 350, travel_cost: 225)
plagne = Destination.create(name: "La Plagne", theme: ski, photo: "ski.jpg", average_daily_cost: 270, travel_cost: 225)
serre_chevalier = Destination.create(name: "Serre Chevalier", theme: ski, photo: "ski.jpg", average_daily_cost: 230, travel_cost: 225)
risoul_vars = Destination.create(name: "Risoul Vars", theme: ski, photo: "ski.jpg", average_daily_cost: 180, travel_cost: 225)
les_orres = Destination.create(name: "Les Orres", theme: ski, photo: "ski.jpg", average_daily_cost: 140, travel_cost: 225)
praloup = Destination.create(name: "Praloup", theme: ski, photo: "ski.jpg", average_daily_cost: 170, travel_cost: 225)
creuse = Destination.create(name: "La creuse", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 80)
sarthe = Destination.create(name: "La Sarthe", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 65)
finistere = Destination.create(name: "Le Finistère", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 150)
landes = Destination.create(name: "Les Landes", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 220)
loiret = Destination.create(name: "Le Loiret", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 80)
vendee = Destination.create(name: "La Vendée", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 140)
ardeche = Destination.create(name: "L'Ardèche", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 220)
lozere = Destination.create(name: "La Lozère", theme: countryside, photo: "countryside.jpg", average_daily_cost: 50, travel_cost: 120)
manche = Destination.create(name: "La Manche", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 70)
vosges = Destination.create(name: "Les Vosges", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 100)
cote_dor = Destination.create(name: "La Côte-d'Or", theme: countryside, photo: "countryside.jpg", average_daily_cost: 60, travel_cost: 110)

puts "Creating polls...."

poll1 = Poll.create(deadline: "Fri, 01 Mar 2019",event: evg)

puts "Creating choices...."
choice1 = Choice.create(poll: poll1, choice_type: "theme",theme: town)
choice2 = Choice.create(poll: poll1, choice_type: "theme",theme: sea)
choice3 = Choice.create(poll: poll1, choice_type: "date",start_date: "Fri, 12 Apr 2019", end_date: "Sun, 14 Apr 2019")
choice4 = Choice.create(poll: poll1, choice_type: "date",start_date: "Thu, 18 Apr 2019", end_date: "Sun, 21 Apr 2019")
# puts "Creating answers...."

puts "all seeded!"
