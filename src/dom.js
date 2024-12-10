import day from "./day";

async function display(pdays) {
  const days = await pdays;
  for (let i = 0; i < 3; i++) {
    displayDay(days[i], i);
  }
}

function displayDay(day, dayNumber) {
  const date = document.querySelector(`#day-${dayNumber} > .date`)
  const temp = document.querySelector(`#day-${dayNumber} > .temp`)
  const feelsLike = document.querySelector(`#day-${dayNumber} > .feels-like`)
  const desc = document.querySelector(`#day-${dayNumber} > .desc`)
  
  date.textContent = day.date;
  temp.textContent = day.temp;
  feelsLike.textContent = day.feelsLike;
  desc.textContent = day.feelsLike;
}

export default display;
