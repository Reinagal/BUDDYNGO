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
Answer.destroy_all
Guest.destroy_all
p 'guest destroy'
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

puts "Creating themes...."
town = Theme.create(name:"European Capital", photo:"cityscape.png")
countryside = Theme.create(name:"Escape in Regions", photo:"countryscape.png")
ski = Theme.create(name:"Ski Trip", photo:"mountainscape.png")
sea = Theme.create(name:"Sea, Sex & Sun", photo:"beachscape.png")

puts "Creating events...."
evg = Event.create(name: "Ben's bucks party weekend!", description: "As you know Ben is getting married in June. Let's have some fun beforehand...", user: flo)
vac = Event.create(name: "Vacances été 2019", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: nico)
pont = Event.create(name: "Pont de mai 2019", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: flo)
lesmemes = Event.create(name: "On prend les mêmes et on recommence", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: nico)

puts "Creating guests...."
a = Guest.create(event: evg, email:"flo@yopmail.com", name: "Florent")
b = Guest.create(event: evg, email:"guigui@yopmail.com", name: "Guillaume")
c = Guest.create(event: evg, email:"olive@yopmail.com", name: "Olivier")
d = Guest.create(event: evg, email:"bob@yopmail.com", name: "Bob")
e = Guest.create(event: evg, email:"nico@yopmail.com", name: "Nicolas")
f = Guest.create(event: evg, email:"leo@yopmail.com", name: "Leo")
g = Guest.create(event: evg, email:"joe@yopmail.com", name: "Joe")
h = Guest.create(event: evg, email:"michel@yopmail.com", name: "Michel")
i = Guest.create(event: pont, email:"flo@yopmail.com", name: "Florent")
j = Guest.create(event: pont, email:"emma@yopmail.com", name: "Emma")
k = Guest.create(event: pont, email:"sara@yopmail.com", name: "Sara")
l = Guest.create(event: lesmemes, email:"nico@yopmail.com", name: "Nico")
m = Guest.create(event: lesmemes, email:"julien@yopmail.com", name: "Julien")
n = Guest.create(event: lesmemes, email:"chloe@yopmail.com", name: "Chloe")
o = Guest.create(event: lesmemes, email:"megan@yopmail.com", name: "Megan")
q = Guest.create(event: lesmemes, email:"jean@yopmail.com", name: "Jean")
r = Guest.create(event: lesmemes, email:"peter@yopmail.com", name: "Peter")
s =Guest.create(event: lesmemes, email:"marjorie@yopmail.com", name: "Marjorie")
t =Guest.create(event: lesmemes, email:"olive@yopmail.com", name: "Olive")

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
poll2 = Poll.create(deadline: "Fri, 01 Mar 2020",event: lesmemes)

puts "Creating choices...."
choice1 = Choice.create(poll: poll1, choice_type: "theme",theme: town)
choice2 = Choice.create(poll: poll1, choice_type: "theme",theme: sea)
choice3 = Choice.create(poll: poll1, choice_type: "date",start_date: "Fri, 12 Apr 2019", end_date: "Sun, 14 Apr 2019")
choice4 = Choice.create(poll: poll1, choice_type: "date",start_date: "Thu, 19 Apr 2019", end_date: "Sun, 21 Apr 2019")
choice5 = Choice.create(poll: poll1, choice_type: "theme",theme: ski)
choice6 = Choice.create(poll: poll1, choice_type: "theme",theme: countryside)
choice7 = Choice.create(poll: poll1, choice_type: "date",start_date: "Fri, 26 Apr 2019", end_date: "Sun, 28 Apr 2019")
choice8 = Choice.create(poll: poll1, choice_type: "date",start_date: "Fri, 3 May 2019", end_date: "Sun, 5 May 2019")
choice9 = Choice.create(poll: poll1, choice_type: "date",start_date: "Fri, 10 May 2019", end_date: "Sun, 12 May 2019")
choice10 = Choice.create(poll: poll2, choice_type: "theme",theme: sea)
choice11 = Choice.create(poll: poll2, choice_type: "theme",theme: town)
choice12 = Choice.create(poll: poll2, choice_type: "date",start_date: "Fri, 12 Apr 2020", end_date: "Sun, 14 Apr 2020")
choice13 = Choice.create(poll: poll2, choice_type: "date",start_date: "Thu, 19 Apr 2020", end_date: "Sun, 21 Apr 2020")
choice14 = Choice.create(poll: poll2, choice_type: "theme",theme: countryside)
choice15 = Choice.create(poll: poll2, choice_type: "theme",theme: ski)
choice16 = Choice.create(poll: poll2, choice_type: "date",start_date: "Fri, 26 Apr 2020", end_date: "Sun, 28 Apr 2020")
choice17 = Choice.create(poll: poll2, choice_type: "date",start_date: "Fri, 3 May 2020", end_date: "Sun, 5 May 2020")
choice18 = Choice.create(poll: poll2, choice_type: "date",start_date: "Fri, 10 May 2020", end_date: "Sun, 12 May 2020")

puts "Creating answers...."
answer1 = Answer.create(poll: poll2, theme_ranking: "15,10,11,14", chosen_date: ["12", "16", "18"], budget_max: 350)
answer2 = Answer.create(poll: poll2, theme_ranking: "15,10,11,14", chosen_date: ["12", "13", "16", "17", "18"], budget_max: 350)
answer3 = Answer.create(poll: poll2, theme_ranking: "14,10,11,15", chosen_date: ["13", "16", "17", "18"], budget_max: 350)
answer4 = Answer.create(poll: poll2, theme_ranking: "14,11,10,15", chosen_date: ["12", "18"], budget_max: 275)
answer5 = Answer.create(poll: poll2, theme_ranking: "11,15,10,14", chosen_date: ["12", "13", "16", "17", "18"], budget_max: 450)
answer6 = Answer.create(poll: poll2, theme_ranking: "10,11,14,15", chosen_date: ["12"], budget_max: 500)
answer7 = Answer.create(poll: poll2, theme_ranking: "15,10,11,14", chosen_date: ["12", "13", "17", "18"], budget_max: 250)
answer8 = Answer.create(poll: poll2, theme_ranking: "10,11,14,15", chosen_date: ["12", "13", "17", "18"], budget_max: 450)

puts "all seeded!"
