const ideas = [
  {
    title: "Instead of Paris, consider Lyon.",
    description: "You'll still get that 'French metropolitan' feel that Paris gives you, but without the expensive tourist traps and overpriced restaurants in Paris. Plus, Lyon has these rad hidden passageways that you can freely access by going through normal apartment or store buildings!"
  },
  {
    title: "Instead of the Maldives, consider Zanzibar, Tanzania.",
    description: "Beautiful beaches, turquoise waters and excellent hotels for a fraction of the price. Bonus, the seafood is incredible & if you fancy more than just relaxing, plenty of safaris start from Dar es Salaam, just a couple of hours boat ride away."
  },
  {
    title: "Instead of Prague, consider Krakow.",
    description: "While Prague us still considered far more budget friendly than the usual big European cities, if you're on a tight budget think about skipping on Prague for Krakow. Beers, food, accommodations and activities all come in at a much more affordable price. Krakow offers rich history and architecture (it was spared in WWII), more local culture  (Prague has become super touristy in the last decade or so), fewer tourists during high seasons and their old town is equally as picturesque with the main square (Rynek Glowny) being one of the largest medieval town squares in Europe."
  },
  {
    title: "Instead of Prague, consider Tallinn, Estonia.",
    description: "Tallinn’s old town is one of the best preserved medieval cities in Europe. Super beautiful architecture on every street. Significantly less touristy than the likes of Prague, Krakow or Budapest and the price matches. Even staying in the old town itself, in buildings from the Middle Ages, is super affordable & if you want to get out or visit two cities during your trip, Helsinki is only a two hour ferry away."
  },
  {
    title: "Instead of Singapore, consider Ho Chi Minh City, Vietnam.",
    description: "A little more on the wild side than super organised Singapore, Ho Chi Minh City is filled with awesome historic sites, temples & even better food. It’s a perfect city to sit in a sky bar atop a skyscraper with a fancy cocktail but unlike in Singapore, it won’t break the bank."
  },
];

const randomIndex = Math.floor(Math.random() * ideas.length);

function displayTravelIdea () {
  return ideas[randomIndex];
}

console.log(displayTravelIdea());
