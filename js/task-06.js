const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.replace("invalid", "valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.replace("valid", "invalid");
  }
}
