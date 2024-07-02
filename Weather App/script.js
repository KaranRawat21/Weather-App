const checkButton = document.querySelector('.check');
const inputcity = document.querySelector('.input');



checkButton.addEventListener('click', eventFunction);

inputcity.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    eventFunction()
  }
})



function eventFunction() {
  const city = inputcity.value.trim();
  inputcity.value = '';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43145dc1a269718582bb0f42777bc908`;

  fetchData(url, city);
}

//Api fecthng
async function fetchData(url, city) {
  try {
    const response = await fetch(url);

    const data = await response.json();
    displayWeather(data, city);



  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayWeather(data, city) {
  const outputContainer = document.querySelector('.outputContainer');
  const temp = (data.main.temp - 273.15).toFixed(2);
  const description = data.weather[0].description;
  const humidity = data.main.humidity;

  outputContainer.innerHTML =
    // `<img src="img/pngwing.com (1).png" alt="">
    `<div class="output">
        <h2 class = "cityHeading">${city.toUpperCase()}</h2>
        <h3><span>Temperature:</span> ${temp} &deg;C</h3>
        <h3><span>Description:</span> ${description}</h3>
        <h3><span>Humidity:</span> ${humidity}%</h3>
      </div>`

}
