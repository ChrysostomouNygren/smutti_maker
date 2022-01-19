import { shuffle } from "lodash-es";
// här importerar vi shuffle från lodash-es, så slipper vi skriva tusen rader med kod för att shuffla!
import getRandomFruitsName from "random-fruits-name";

function getFiveRandomFruits() {
  const fruits = [];

  for (let i = 0; i < 5; i++) {
    const name = getRandomFruitsName();
    fruits.push(name);
  }
  return fruits;
}

const name = getRandomFruitsName();

// const ingredients = [
//   "Banana",
//   "Mango",
//   "Orange juice",
//   "Sorbet",
//   "Silken tofu",
//   "Nut butters",
//   "Avocado",
//   "Bananas",
//   "Pineapple",
//   "Strawberries",
//   "Blueberries",
//   "Raspberries",
//   "Blackberries",
//   "Cherries",
//   "Peaches",
//   "Cantaloupe",
//   "Watermelon",
//   "Pomegranate seeds",
//   "Kiwi",
//   "Acai berries",
// ];

const button = document.querySelector("button");
const ul = document.querySelector("ul");

function shuffleAndRender() {
  // Här shufflar vi ingredienserna!
  const ingredients = getFiveRandomFruits();

  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ul.append(li);
  });
}

button.addEventListener("click", () => {
  //   Här är så att vi tar bort texten som finns sen innan, när vi trycker på knappen igen.
  ul.textContent = null;
  shuffleAndRender();
});
