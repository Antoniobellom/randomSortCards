let nroCards = document.querySelector("#nro-cards");
let btnDraw = document.querySelector("#draw");
let btnSort = document.querySelector("#sort");
let randomCards = document.querySelector(".random-cards");
let srtCards = document.querySelector(".step-sorting-cards");

let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let icons = ["spades", "diamonds", "hearts", "clubs"];

let cardsGenerated = [];

btnDraw.addEventListener("click", () => {
  let total = nroCards.value;
  if (total > 0) {
    cardsGenerated = [];
    while (total > 0) {
      let c = cards[Math.floor(Math.random() * cards.length)];
      let i = icons[Math.floor(Math.random() * icons.length)];
      cardsGenerated.push({ nro: c, icon: i });
      total--;
    }
    generateCards();
  }
});

btnSort.addEventListener("click", () => {
    srtCards.innerHTML = ""; 
  sortingCard(cardsGenerated);
});

function generateCards() {
  randomCards.innerHTML = "";
  cardsGenerated.forEach((card) => {
    randomCards.appendChild(drawCard(card));
  });
}

function drawCard(card) {
  let divCard = document.createElement("div");
  let divNumber = document.createElement("div");
  divCard.classList.add("cards");

  divNumber.classList.add("number", card.icon);
  divNumber.innerHTML = changeValue(card.nro);
  divCard.appendChild(divNumber);

  return divCard;
}
function changeValue(nro) {
  switch (nro) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return nro;
  }
}
function sortingCard(arr) {
  let wall = arr.length - 1;
  while (wall > 0) {
    for (let index = 0; index < wall; index++) {
      if (arr[index].nro > arr[index + 1].nro) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      generateSortCards();
    }
    wall--;
  }
}

function generateSortCards() {
    let randomCards = document.createElement("div");
    randomCards.classList.add('random-cards');
    cardsGenerated.forEach((card) => {
      randomCards.appendChild(drawCard(card));
    });
    srtCards.appendChild(randomCards);
  }
