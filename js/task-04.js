const spanEl = document.querySelector("#value");
let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
  console.log(counterValue);
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
  console.log(counterValue);
});
