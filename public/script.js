const suits = ["spades", "diamond", "club", "heart"];

const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const colors = ["Black", "Red"];

//Empty array to contain cards
let deck = [];

//Create a deck of cards
for (let i = 0; i < suits.length; i++) {
  for (let y = 0; y < colors.length; y++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i], Color: colors[y] };
      deck.push(card);
    }
  }
}

for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}
//if color = red add class red

console.log("The first five cards are:");

// display 5 results
for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Suit} of ${deck[i].Color}`);
}

function renderDeck() {
  document.getElementById("deck").innerHTML = "";

  for (var i = 0; i < 5; i++) {
    var card = document.createElement("div");
    var icon = "";
    if (deck[i].Suit == "heart") icon = "&hearts;";
    else if (deck[i].Suit == "spades") icon = "&spades;";
    else if (deck[i].Suit == "diamond") icon = "&diams;";
    else icon = "&clubs;";

    card.innerHTML = deck[i].Value + "" + icon;
    card.classList.add("card");
    card.classList.add(deck[i].Suit);
    document.getElementById("deck").appendChild(card);
  }
}

renderDeck(deck);
