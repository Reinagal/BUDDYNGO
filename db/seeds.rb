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
buddytest = User.create!(name: "Test", email: "buddytest@yopmail.com", password: "azerty")
guigui = User.create!(name: "Guillaume", email: "g.laganier@gmail.com", password: "azerty", phone_number: "+33689571444")

puts "Creating themes...."
countryside = Theme.create!(name:"Green Chill-Out", photo:"countryscape.png")
region = Theme.create!(name:"Escape in Regions", photo:"castle.png")
beach = Theme.create!(name:"Sea, Sex & Sun", photo:"beachscape.png")
ski = Theme.create!(name:"Ski Trip", photo:"mountainscape.png")
euro = Theme.create!(name:"Euro fun", photo:"cityscapeEUR.png")
premium = Theme.create!(name:"Premium", photo:"bridge.png")

puts "Creating events...."
event = Event.create!(name: "Anniv' de Manu", description: "L'anniv' de Manu approche, je vous propose qu'on s'organise des vacances pour fêter ça !", user: guigui)

puts "Creating polls...."

poll1 = Poll.create!(deadline: "Fri, 01 Mar 2019",event: event)

puts "Creating guests...."
gui = Guest.create!(event: event, email:"g.laganier@gmail.com", name: "Guillaume", phone_number: "+33689571444")
flo = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Florent", phone_number: "+33681365066")
nico = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Nico", phone_number: "+33662885057")
olive = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Olive")
mathieu = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Mathieu")
gregoire = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Grégoire")
alki = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Alki")
esther = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Esther")
eleonore = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Eléonore")
nora = Guest.create!(event: event, email:"buddyngo@yopmail.com", name: "Nora")


puts "Creating choices...."
choice1 = Choice.create!(poll: poll1, choice_type: "theme",theme: euro)
choice2 = Choice.create!(poll: poll1, choice_type: "theme",theme: beach)
choice3 = Choice.create!(poll: poll1, choice_type: "theme",theme: premium)
choice4 = Choice.create!(poll: poll1, choice_type: "date",start_date: "Sat, 4 May 2019", end_date: "Sun, 12 May 2019")
choice5 = Choice.create!(poll: poll1, choice_type: "date",start_date: "Sat, 11 May 2019", end_date: "Sun, 19 May 2019")
choice6 = Choice.create!(poll: poll1, choice_type: "date",start_date: "Sat, 18 May 2019", end_date: "Sun, 26 May 2019")

UserMailer.votepush(gui).deliver_now unless gui.email.nil? || gui.email == ""
SendSmsService.new(gui).call unless gui.phone_number.nil? || gui.phone_number == ""

puts "Creating answers...."
answer1 = Answer.create!(guest: flo, poll: poll1, theme_ranking: "1, 2, 3", chosen_date: ["4", "6"], budget_max: 1500)
answer2 = Answer.create!(guest: nico, poll: poll1, theme_ranking: "2, 3, 1", chosen_date: ["5", "6"], budget_max: 1300)
answer3 = Answer.create!(guest: olive, poll: poll1, theme_ranking: "1, 2, 3", chosen_date: ["6", "4", "5"], budget_max: 1350)
answer4 = Answer.create!(guest: mathieu, poll: poll1, theme_ranking: "3, 2, 1", chosen_date: ["4", "5"], budget_max: 1400)
answer5 = Answer.create!(guest: gregoire, poll: poll1, theme_ranking: "1, 2, 3", chosen_date: ["5", "6"], budget_max: 1000)
answer6 = Answer.create!(guest: alki, poll: poll1, theme_ranking: "3, 1, 2", chosen_date: ["4", "5", "6"], budget_max: 1300)
answer7 = Answer.create!(guest: esther, poll: poll1, theme_ranking: "2, 3, 1", chosen_date: ["4", "5"], budget_max: 1250)
answer9 = Answer.create!(guest: eleonore, poll: poll1, theme_ranking: "1, 2, 3", chosen_date: ["4", "5"], budget_max: 1300)
answer9 = Answer.create!(guest: nora, poll: poll1, theme_ranking: "1, 3, 1", chosen_date: ["4", "6"], budget_max: 1350)

puts "Updating status of guests...."
flo.status = 1
nico.status = 1
olive.status = 1
mathieu.status = 1
gregoire.status = 1
alki.status = 1
esther.status = 1
eleonore.status = 1
nora.status = 1


flo.save
nico.save
olive.save
mathieu.save
gregoire.save
alki.save
esther.save
eleonore.save
nora.save

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
rennes = Destination.create!(name: "Rennes", theme: region, photo: "rennes.jpg", average_daily_cost: 90, travel_cost: 100)

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


puts "all seeded!"
