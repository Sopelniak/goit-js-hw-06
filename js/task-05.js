const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const textDefault = spanEl.textContent;

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.target.value === "") {
    spanEl.textContent = textDefault;
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}
