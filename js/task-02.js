const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const etemEls = [];

ingredients.forEach(function (ingredient) {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  etemEls.push(itemEl);
});

ingredientsList.append(...etemEls);
console.log(ingredientsList);
