# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
puts "Destroying all...."

Answer.destroy_all
p 'answer destroy'
Choice.destroy_all
p 'choice destroy'
Destination.destroy_all
p 'destination destroy'
Theme.destroy_all
p 'theme destroy'
Poll.destroy_all
p 'poll destroy'
Guest.destroy_all
p 'guest destroy'
Event.destroy_all
p 'event destroy'
User.destroy_all
p 'user destroy'

puts "Creating Users...."
flo = User.create!(name: "Florent", email: "flo@yopmail.com", password: "azerty")
nico = User.create!(name: "Nicolas", email: "nico@yopmail.com", password: "azerty")
guigui = User.create!(name: "Guillaume", email: "guigui@yopmail.com", password: "azerty")
olive = User.create!(name: "Olivier", email: "olive@yopmail.com", password: "azerty")

puts "Creating themes...."
countryside = Theme.create!(name:"Green Chill-Out", photo:"countryscape.png")
region = Theme.create!(name:"Escape in Regions", photo:"castle.png")
beach = Theme.create!(name:"Sea, Sex & Sun", photo:"beachscape.png")
ski = Theme.create!(name:"Ski Trip", photo:"mountainscape.png")
euro = Theme.create!(name:"Euro fun", photo:"cityscapeEUR.png")
premium = Theme.create!(name:"Premium", photo:"bridge.png")

# puts "Creating events...."
# evg = Event.create!(name: "Ben's bucks party weekend!", description: "As you know Ben is getting married in June. Let's have some fun beforehand...", user: flo)
# vac = Event.create!(name: "Vacances été 2019", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: nico)
# pont = Event.create!(name: "Pont de mai 2019", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: flo)
# lesmemes = Event.create!(name: "On prend les mêmes et on recommence", description: "Sapiens prudentior post Africani de est quam me ab gloria Laelius a putes te libro senectute tota est loquetur fere de mortem prudentior his est mortem gloria et amicitiae de.", user: nico)

# puts "Creating guests...."
# a = Guest.create!(event: evg, email:"flo@yopmail.com", name: "Florent")
# b = Guest.create!(event: evg, email:"guigui@yopmail.com", name: "Guillaume")
# c = Guest.create!(event: evg, email:"olive@yopmail.com", name: "Olivier")
# d = Guest.create!(event: evg, email:"bob@yopmail.com", name: "Bob")
# e = Guest.create!(event: evg, email:"nico@yopmail.com", name: "Nicolas")
# f = Guest.create!(event: evg, email:"leo@yopmail.com", name: "Leo")
# g = Guest.create!(event: evg, email:"joe@yopmail.com", name: "Joe")
# h = Guest.create!(event: evg, email:"michel@yopmail.com", name: "Michel")
# i = Guest.create!(event: pont, email:"flo@yopmail.com", name: "Florent")
# j = Guest.create!(event: pont, email:"emma@yopmail.com", name: "Emma")
# k = Guest.create!(event: pont, email:"sara@yopmail.com", name: "Sara")
# l = Guest.create!(event: lesmemes, email:"nico@yopmail.com", name: "Nico")
# m = Guest.create!(event: lesmemes, email:"julien@yopmail.com", name: "Julien")
# n = Guest.create!(event: lesmemes, email:"chloe@yopmail.com", name: "Chloe")
# o = Guest.create!(event: lesmemes, email:"megan@yopmail.com", name: "Megan")
# q = Guest.create!(event: lesmemes, email:"jean@yopmail.com", name: "Jean")
# r = Guest.create!(event: lesmemes, email:"peter@yopmail.com", name: "Peter")
# s =Guest.create!(event: lesmemes, email:"marjorie@yopmail.com", name: "Marjorie")
# t =Guest.create!(event: lesmemes, email:"olive@yopmail.com", name: "Olive")

puts "Creating destinations...."
creuse = Destination.create!(name: "La creuse", theme: countryside, photo: "creuse.jpg", average_daily_cost: 65, travel_cost: 80)
sarthe = Destination.create!(name: "La Sarthe", theme: countryside, photo: "sarthe.jpg", average_daily_cost: 60, travel_cost: 65)
finistere = Destination.create!(name: "Le Finistère", theme: countryside, photo: "finistere.jpg", average_daily_cost: 60, travel_cost: 120)
landes = Destination.create!(name: "Les Landes", theme: countryside, photo: "landes.jpg", average_daily_cost: 60, travel_cost: 120)
loiret = Destination.create!(name: "Le Loiret", theme: countryside, photo: "loiret.jpg", average_daily_cost: 60, travel_cost: 80)
vendee = Destination.create!(name: "La Vendée", theme: countryside, photo: "vendee.jpg", average_daily_cost: 60, travel_cost: 120)
ardeche = Destination.create!(name: "L'Ardèche", theme: countryside, photo: "ardeche.jpg", average_daily_cost: 60, travel_cost: 120)
lozere = Destination.create!(name: "La Lozère", theme: countryside, photo: "lozere.jpg", average_daily_cost: 50, travel_cost: 120)
manche = Destination.create!(name: "La Manche", theme: countryside, photo: "manche.jpg", average_daily_cost: 60, travel_cost: 70)
vosges = Destination.create!(name: "Les Vosges", theme: countryside, photo: "vosges.jpg", average_daily_cost: 60, travel_cost: 80)
cote_dor = Destination.create!(name: "La Côte-d'Or", theme: countryside, photo: "cote_dor.jpg", average_daily_cost: 60, travel_cost: 90)

lyon = Destination.create!(name: "Lyon", theme: region, photo: "lyon.jpg", average_daily_cost: 150, travel_cost: 120)
bordeaux = Destination.create!(name: "Bordeaux", theme: region, photo: "bordeaux.jpg", average_daily_cost: 150, travel_cost: 140)
marseille = Destination.create!(name: "Marseille", theme: region, photo: "marseille.jpg", average_daily_cost: 100, travel_cost: 180)
strasbourg = Destination.create!(name: "Strasbourg", theme: region, photo: "strasbourg.jpg", average_daily_cost: 120, travel_cost: 100)
toulouse = Destination.create!(name: "Toulouse", theme: region, photo: "toulouse.jpg", average_daily_cost: 100, travel_cost: 140)
nancy = Destination.create!(name: "Nancy", theme: region, photo: "nancy.jpg", average_daily_cost: 100, travel_cost: 100)
la_rochelle = Destination.create!(name: "La Rochelle", theme: region, photo: "la_rochelle.jpg", average_daily_cost: 80, travel_cost: 120)
dijon = Destination.create!(name: "Dijon", theme: region, photo: "dijon.jpg", average_daily_cost: 80, travel_cost: 100)
clermont = Destination.create!(name: "Clermont-Ferrand", theme: region, photo: "clermont.jpg", average_daily_cost: 80, travel_cost: 100)
rennes = Destination.create!(name: "Rennes", theme: region, photo: ".jpg", average_daily_cost: 90, travel_cost: 100)

cannes = Destination.create!(name: "Cannes", theme: beach, photo: "cannes.jpg", average_daily_cost: 144, travel_cost: 166)
calvi = Destination.create!(name: "Calvi", theme: beach, photo: "calvi.jpg", average_daily_cost: 174, travel_cost: 256)
deauville = Destination.create!(name: "Deauville", theme: beach, photo: "deauville.jpg", average_daily_cost: 157, travel_cost: 52)
biarritz = Destination.create!(name: "Biarritz", theme: beach, photo: "biarritz.jpg", average_daily_cost: 92, travel_cost: 118)
porto_vecchio = Destination.create!(name: "Porto Vecchio", theme: beach, photo: "porto_vecchio.jpg", average_daily_cost: 154, travel_cost: 230)
ibiza = Destination.create!(name: "Ibiza", theme: beach, photo: "ibiza.jpg", average_daily_cost: 148, travel_cost: 250)
lloret = Destination.create!(name: "Lloret de Mar", theme: beach, photo: "lloret.jpg", average_daily_cost: 138, travel_cost: 150)
marbella = Destination.create!(name: "Marbella", theme: beach, photo: "marbella.jpg", average_daily_cost: 142, travel_cost: 200)
cassis = Destination.create!(name: "Cassis", theme: beach, photo: "cassis.jpg", average_daily_cost: 98, travel_cost: 180)
grande_motte = Destination.create!(name: "La Grande-Motte", theme: beach, photo: "grande_motte.jpg", average_daily_cost: 88, travel_cost: 180)
baule = Destination.create!(name: "La Baule", theme: beach, photo: "baule.jpg", average_daily_cost: 91, travel_cost: 120)

les_2_alpes = Destination.create!(name: "Les 2 Alpes", theme: ski, photo: "les_2_alpes.jpg", average_daily_cost: 235, travel_cost: 225)
alpehuez = Destination.create!(name: "L'Alpe d'Huez", theme: ski, photo: "alpehuez.jpg", average_daily_cost: 250, travel_cost: 225)
courchevel = Destination.create!(name: "Courchevel", theme: ski, photo: "courchevel.jpg", average_daily_cost: 460, travel_cost: 225)
val_thorens = Destination.create!(name: "Val Thorens", theme: ski, photo: "val_thorens.jpg", average_daily_cost: 250, travel_cost: 225)
avoriaz = Destination.create!(name: "Avoriaz", theme: ski, photo: "avoriaz.jpg", average_daily_cost: 230, travel_cost: 225)
chamonix = Destination.create!(name: "Chamonix", theme: ski, photo: "chamonix.jpg", average_daily_cost: 350, travel_cost: 225)
plagne = Destination.create!(name: "La Plagne", theme: ski, photo: "plagne.jpg", average_daily_cost: 270, travel_cost: 225)
serre_chevalier = Destination.create!(name: "Serre Chevalier", theme: ski, photo: "serre_chevalier.jpg", average_daily_cost: 230, travel_cost: 225)
risoul_vars = Destination.create!(name: "Risoul Vars", theme: ski, photo: "risoul_vars.jpg", average_daily_cost: 180, travel_cost: 225)
les_orres = Destination.create!(name: "Les Orres", theme: ski, photo: "les_orres.jpg", average_daily_cost: 140, travel_cost: 225)
praloup = Destination.create!(name: "Praloup", theme: ski, photo: "praloup.jpg", average_daily_cost: 170, travel_cost: 225)

london = Destination.create!(name: "London", theme: euro, photo: "london.jpg", average_daily_cost: 200, travel_cost: 350)
copenhagen = Destination.create!(name: "Copenhagen", theme: euro, photo: "copenhagen.jpg", average_daily_cost: 180, travel_cost: 300)
amsterdam = Destination.create!(name: "Amsterdam", theme: euro, photo: "amsterdam.jpg", average_daily_cost: 166, travel_cost: 250)
lisbon = Destination.create!(name: "Lisbon", theme: euro, photo: "lisbon.jpg", average_daily_cost: 150, travel_cost: 300)
barcelona = Destination.create!(name: "Barcelona", theme: euro, photo: "barcelona.jpg", average_daily_cost: 145, travel_cost: 150)
berlin = Destination.create!(name: "Berlin", theme: euro, photo: "berlin.jpg", average_daily_cost: 140, travel_cost: 150)
rome = Destination.create!(name: "Rome", theme: euro, photo: "rome.jpg", average_daily_cost: 140, travel_cost: 150)
brussels = Destination.create!(name: "Brussels", theme: euro, photo: "brussels.jpg", average_daily_cost: 140, travel_cost: 150)
budapest = Destination.create!(name: "Budapest", theme: euro, photo: "budapest.jpg", average_daily_cost: 120, travel_cost: 300)
vilnius = Destination.create!(name: "Vilnius", theme: euro, photo: "vilnius.jpg", average_daily_cost: 90, travel_cost: 400)

monaco = Destination.create!(name: "Monaco", theme: premium, photo: "monaco.jpg", average_daily_cost: 440, travel_cost: 250)
dubai = Destination.create!(name: "Dubai", theme: premium, photo: "dubai.jpg", average_daily_cost: 350, travel_cost: 800)
trianon = Destination.create!(name: "Le Trianon with Carlos", theme: premium, photo: "trianon.jpg", average_daily_cost: 450, travel_cost: 100)
leicestershire = Destination.create!(name: "Like a Lord in Leiceshire", theme: premium, photo: "leicestershire.jpg", average_daily_cost: 500, travel_cost: 350)
palmeraie = Destination.create!(name: "Palmeraie with DSK", theme: premium, photo: "palmeraie.jpg", average_daily_cost: 450, travel_cost: 500)
cr7 = Destination.create!(name: "Formentera with CR7", theme: premium, photo: "cr7.jpg", average_daily_cost: 350, travel_cost: 300 )
yacht = Destination.create!(name: "Book a Yacht with MyPhocea", theme: premium, photo: "yacht.jpg", average_daily_cost: 5000, travel_cost: 200)
bunga = Destination.create!(name: "Bunga Bunga in Sardinia", theme: premium, photo: "bunga.jpg", average_daily_cost: 10000, travel_cost: 250)

# puts "Creating polls...."

# poll1 = Poll.create!(deadline: "Fri, 01 Mar 2019",event: evg)
# poll2 = Poll.create!(deadline: "Fri, 01 Mar 2020",event: lesmemes)

# puts "Creating choices...."
# choice1 = Choice.create!(poll: poll1, choice_type: "theme",theme: town)
# choice2 = Choice.create!(poll: poll1, choice_type: "theme",theme: sea)
# choice3 = Choice.create!(poll: poll1, choice_type: "date",start_date: "Fri, 12 Apr 2019", end_date: "Sun, 14 Apr 2019")
# choice4 = Choice.create!(poll: poll1, choice_type: "date",start_date: "Thu, 19 Apr 2019", end_date: "Sun, 21 Apr 2019")
# choice5 = Choice.create!(poll: poll1, choice_type: "theme",theme: ski)
# choice6 = Choice.create!(poll: poll1, choice_type: "theme",theme: countryside)
# choice7 = Choice.create!(poll: poll1, choice_type: "date",start_date: "Fri, 26 Apr 2019", end_date: "Sun, 28 Apr 2019")
# choice8 = Choice.create!(poll: poll1, choice_type: "date",start_date: "Fri, 3 May 2019", end_date: "Sun, 5 May 2019")
# choice9 = Choice.create!(poll: poll1, choice_type: "date",start_date: "Fri, 10 May 2019", end_date: "Sun, 12 May 2019")
# choice10 = Choice.create!(poll: poll2, choice_type: "theme",theme: sea)
# choice11 = Choice.create!(poll: poll2, choice_type: "theme",theme: town)
# choice12 = Choice.create!(poll: poll2, choice_type: "date",start_date: "Fri, 12 Apr 2020", end_date: "Sun, 14 Apr 2020")
# choice13 = Choice.create!(poll: poll2, choice_type: "date",start_date: "Thu, 19 Apr 2020", end_date: "Sun, 21 Apr 2020")
# choice14 = Choice.create!(poll: poll2, choice_type: "theme",theme: countryside)
# choice15 = Choice.create!(poll: poll2, choice_type: "theme",theme: ski)
# choice16 = Choice.create!(poll: poll2, choice_type: "date",start_date: "Fri, 26 Apr 2020", end_date: "Sun, 28 Apr 2020")
# choice17 = Choice.create!(poll: poll2, choice_type: "date",start_date: "Fri, 3 May 2020", end_date: "Sun, 5 May 2020")
# choice18 = Choice.create!(poll: poll2, choice_type: "date",start_date: "Fri, 10 May 2020", end_date: "Sun, 12 May 2020")
# choice19 = Choice.create!(poll: poll2, choice_type: "destination", destination: amsterdam)
# choice20 = Choice.create!(poll: poll2, choice_type: "destination", destination: london)
# choice21 = Choice.create!(poll: poll2, choice_type: "destination", destination: barcelona)

# puts "Creating answers...."
# answer1 = Answer.create!(guest: l, poll: poll2, theme_ranking: "15,10,11,14", chosen_date: ["12", "16", "18"], budget_max: 350)
# answer2 = Answer.create!(guest: m, poll: poll2, theme_ranking: "15,10,11,14", chosen_date: ["12", "13", "16", "17", "18"], budget_max: 350)
# answer3 = Answer.create!(guest: n, poll: poll2, theme_ranking: "14,10,11,15", chosen_date: ["13", "16", "17", "18"], budget_max: 350)
# answer4 = Answer.create!(guest: o, poll: poll2, theme_ranking: "14,11,10,15", chosen_date: ["12", "18"], budget_max: 275)
# answer5 = Answer.create!(guest: q, poll: poll2, theme_ranking: "11,15,10,14", chosen_date: ["12", "13", "16", "17", "18"], budget_max: 450)
# answer6 = Answer.create!(guest: r, poll: poll2, theme_ranking: "10,11,14,15", chosen_date: ["12"], budget_max: 500)
# answer7 = Answer.create!(guest: s, poll: poll2, theme_ranking: "15,10,11,14", chosen_date: ["12", "13", "17", "18"], budget_max: 250)
# answer8 = Answer.create!(guest: t, poll: poll2, theme_ranking: "10,11,14,15", chosen_date: ["12", "13", "17", "18"], budget_max: 450)

# puts "Updating status of guests...."
# l.status = 1
# m.status = 1
# n.status = 1
# o.status = 1
# q.status = 1
# r.status = 1
# s.status = 1
# t.status = 1

# l.save
# m.save
# n.save
# o.save
# q.save
# r.save
# s.save
# t.save

puts "all seeded!"
