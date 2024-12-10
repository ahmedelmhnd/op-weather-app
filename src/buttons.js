import { getData } from "./communication";
import display from "./dom";

function setupSearchButton() {
  submit();
}

function submit() {
  const input = document.querySelector("input");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    display(getData(input.value));
  });
}

export default setupSearchButton;
