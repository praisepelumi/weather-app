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

  mainContainer.appendChild(instruction);

  // Weather search bar
  const searchBarDiv = document.createElement('div');
  searchBarDiv.setAttribute('class', 'search-bar-div')
  const userInput = document.createElement('input');
  userInput.setAttribute('type', 'text');
  userInput.setAttribute('id', 'userInput');
  


  const searchButton = document.createElement('button');
  searchButton.setAttribute('type', 'button');
  searchButton.setAttribute('class', 'search-button');
  searchButton.innerText = 'Search';

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

  //...
  const subMainDiv = document.createElement('div');
  subMainDiv.className = 'subMainDiv'

  const temperature = document.createElement('p');
  temperature.setAttribute('class', 'temperature');
  

  const degree = document.createElement('p');
  degree.setAttribute('class', 'degree');
  

  const icon = document.createElement('img');
  icon.setAttribute('class', 'icon');
  
  
  const city = document.createElement('p');
  city.className = 'city'
  //...

  async function getApiData (cityName) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f4ba1c5c45874efb70c3f391ae05af62&units=imperial`)
      //const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=f4ba1c5c45874efb70c3f391ae05af62&units=imperial`)
      const data = await response.json();

      const temperature = data.weather[0].main;


      const degree =  data.main.temp

      const imgSrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

      const city = data.name;

      const timeZone =  data.timezone;
      

      return {
        temperature: temperature,
        degree: degree,
        imgSrc: imgSrc,
        city: city,
        timeZone: timeZone,
      }
    }
    catch(error) {
      return 'There was an error with this request'
    }
  }

  async function getWeatherData() {
    try {
      const defaultCities = ['new york', 'lagos', 'london'];
      
      for (let i = 0; i < defaultCities.length; i++) {
        const elem = defaultCities[i];
        const currCity = await getApiData(elem);

        const subDiv = document.createElement('div');
        subDiv.className = 'subDiv'

        const temperature = document.createElement('p');
        temperature.setAttribute('class', 'temperature');
        temperature.innerText = currCity.temperature;

        const degree = document.createElement('p');
        degree.setAttribute('class', 'degree');
        degree.innerText = currCity.degree;

        const icon = document.createElement('img');
        icon.setAttribute('class', 'icon');
        icon.src = currCity.imgSrc;
        

        const city = document.createElement('p');
        city.className = 'city'
        city.innerText = currCity.city;

        // const timeZone = document.createElement('p');
        // timeZone.className = 'timeZone'
        // timeZone.innerText = currCity.timeZone;

        subDiv.appendChild(city);
        subDiv.appendChild(temperature);
        subDiv.appendChild(degree);
        subDiv.appendChild(icon);
        // subDiv.appendChild(timeZone);

        subWeatherDiv.appendChild(subDiv);
      
        
      }
    
      
    } catch (error) {
      console.log('There was an error with this request');
    }
  }
  
  getWeatherData();
  async function getUserInputWeather (userInput) {
    try {
      const currCity = await getApiData(userInput);

      temperature.innerText = currCity.temperature;
      icon.src = currCity.imgSrc;
      degree.innerText = currCity.degree;
      city.innerText = currCity.city;

      subMainDiv.appendChild(city);
      subMainDiv.appendChild(temperature);
      subMainDiv.appendChild(degree);
      subMainDiv.appendChild(icon);

      
      mainWeatherDiv.appendChild(subMainDiv);
    }
    catch(error) {
      return 'There was an error fulfilling this request'
    }
  }

  searchButton.addEventListener('click',async () => {
    const userInputValue = document.querySelector('#userInput').value;
    const data = await getUserInputWeather(userInputValue);
    document.querySelector('#userInput').value = '';
    
  })

})



