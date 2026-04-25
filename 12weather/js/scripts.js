// references to the HTML
const parentTag = document.querySelector('#weatherCard')


// writing a default zipcode
let zip = localStorage.getItem('myZipCode')
if (zip == null) {
    let defaultZip = "80016"
    localStorage.setItem('myZipCode', defaultZip)
    zip = defaultZip
} // end if



console.log(zip)
// setting the path to the API on weather
const myKey = "d36c0644854511fa6cf09bbc6df830be"
const myPath = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${myKey}&units=imperial`
// fetch the remote JSON data for the current weather
fetch(myPath)
.then((response) => response.json())
.then((allData) => {
    //console.log(allData)
    currentWeather(allData)
})

// function that displays the current weather
function currentWeather(weatherResults){
    console.log(weatherResults)
    console.log(weatherResults.weather[0].icon)

    // add the correct town name
    const myTown = document.querySelector('#town')
    myTown.textContent = `Weather for ${weatherResults.name}`

    //current date
    const myDate = document.createElement('p')
    myDate.className = "date"
    const d = new Date()
    myDate.textContent = d.toDateString()
    parentTag.appendChild(myDate)


    //current temp
    const myCurrentTemp = document.createElement('p')
    myCurrentTemp.className = "temperature"
    myCurrentTemp.innerHTML = Math.round(weatherResults.main.temp) + "&deg;F"
    parentTag.appendChild(myCurrentTemp)

    //current icon
    const myWeatherIcon = document.createElement('img')
    myWeatherIcon.src = `https://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`
    myWeatherIcon.alt = weatherResults.weather[0].description
    myWeatherIcon.className = "img"
    parentTag.appendChild(myWeatherIcon)

    //feels like
    const myFeels = document.createElement('p')
    myFeels.className = "feels"
    myFeels.innerHTML = Math.round(weatherResults.main.feels_like) + "&deg;F"
    parentTag.appendChild(myFeels)
    myFeels.textContent = `Feels like: ${Math.round(weatherResults.main.feels_like)}`

    //humidity
    const myHumidity = document.createElement('p')
    myHumidity.className = "humidity"
    myHumidity.innerHTML = weatherResults.main.humidity
    parentTag.appendChild(myHumidity)
    myHumidity.textContent = `Humidity: ${weatherResults.main.humidity}`

    //current weather
    const myCurrentWeather = document.createElement('p')
    myCurrentWeather.className = "weather"
    myCurrentWeather.innerHTML = weatherResults.weather[0].main
    parentTag.appendChild(myCurrentWeather)


} //end of the current weather

// ask for a new zipcode
const theModalBox = document.querySelector('aside')
const theSettings = document.querySelector('#settings')
theSettings.addEventListener('click', () => {
    theModalBox.classList.toggle('show')
})

// set the new zipcode
const myButton = document.querySelector('#applyZip')
myButton.addEventListener('click', () => {
    console.log("you clicked me")
    theModalBox.className = ""
    let theZipcode = document.querySelector('#newZip').value
    if (theZipcode.length === 5) {
       localStorage.setItem('myZipCode', theZipcode)
    }
    window.location.reload()
})



// data validation for the zipcode
myInput = document.querySelector('#newZip')
myInput.addEventListener('input', () => {
    myInput.value = myInput.value.slice(0, 5)
})