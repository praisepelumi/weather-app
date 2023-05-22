document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  
  // Main container
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('class', 'main-container');

  const appName = document.createElement('h1');
  appName.innerText = 'Weather App';

  mainContainer.appendChild(appName);

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


  function loadData () {
    
  }
  
 



})



