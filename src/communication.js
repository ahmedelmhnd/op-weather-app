import day from "./day";

async function getData(country) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}?key=AZWEJHBCLL62TM5JGG67Z3GHY`,
  );
  
  const days = [];
  const data = await response.json();
  
  for (let i = 0; i < 3; i++) {
    const date = data.days[i].datetime;
    const temp = data.days[i].temp;
    const feelsLike = data.days[i].feelslike;
    const desc = data.days[i].description;

    days[i] = new day(date, temp, feelsLike, desc);
  }

  console.log(days);
  return days;
}

export { getData };
