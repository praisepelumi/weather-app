document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  
  // Main container
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('class', 'main-container');

  const appName = document.createElement('h1');
  appName.innerText = 'Weather App';

  const instruction = document.createElement('p');
  instruction.setAttribute('class', 'instruction')
  instruction.innerText = 'Enter a location for weather information';

  mainContainer.appendChild(appName);

  mainContainer.appendChild(instruction)

  // Weather search bar
  const searchBarDiv = document.createElement('div');
  searchBarDiv.setAttribute('class', 'search-bar-div')
  const userInput = document.createElement('input');
  userInput.setAttribute('type', 'text');
  userInput.setAttribute('name', 'userText');
  userInput.className = 'user-input'


  const searchButton = document.createElement('button');
  searchButton.setAttribute('type', 'button');
  searchButton.setAttribute('class', 'search-button')
  searchButton.innerText = 'Search'

  body.appendChild(mainContainer);
  mainContainer.appendChild(searchBarDiv);
  searchBarDiv.appendChild(userInput);
  searchBarDiv.appendChild(searchButton);


  const mainWeatherDiv = document.createElement('div');
  mainWeatherDiv.setAttribute('class', 'main-weather-div');

  mainContainer.appendChild(mainWeatherDiv);

  const subWeatherDiv = document.createElement('div');
  subWeatherDiv.setAttribute('class', 'sub-weather');

  mainContainer.appendChild(subWeatherDiv);

  const temperature = document.createElement('div');
  temperature.setAttribute('class', 'temperature');

  const degree = document.createElement('div');
  degree.setAttribute('class', 'degree');

  const imgSrc = ``;

  const city = document.createElement('div');
  city.setAttribute('class', 'city');

  const date = document.createElement('div');
  date.setAttribute('class', 'date')

  async function loadData () {
    try {
      const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f4ba1c5c45874efb70c3f391ae05af62&units=imperial`)
      //const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=f4ba1c5c45874efb70c3f391ae05af62&units=imperial`)
      const data = await response.json();
      console.log(data)
    }
    catch(error) {
      return 'There was an error with this request'
    }
  }

  
  
 



})



