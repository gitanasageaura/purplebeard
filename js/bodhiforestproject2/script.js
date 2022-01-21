// // // scroll for the image and text in main page background
// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

// // timeline.fromTo('.words', {opacity: 0}, {opacity: 1, duration: 3})
// // not sure if I want to use this yet

// timeline    
//     .to(".woman", 3, { y: -400})
//     .to(".main-title", 3, { y: -100}, "-=3")
//     .to(".background", 3, { y: 80}, "-=3")
//     .to(".page", 6, {top: '30%'})
//     .to(".words", 8, { left: '20%', y: -600});
//     // first number is duration, y will be the direction so you can set the amount it will move and the -= says when you want the action to start, at the same time, before or after

// let scene = new ScrollMagic.Scene({
//     triggerElement: "section", 
//     // when you want the function to start or what section of the page
//     duration: "200%",
//     // length of time
//     triggerHook: 0,
// })
//     .setTween(timeline)
//     .setPin("section")
//     // moves the div underneth it in a set way
//     .addTo(controller);
//     // telling it to add it to the function i created


    // weather widget


// create an object 
let weather = {
    apiKey: "67be3766c18776d2dfdd118e6fb8bf4d",
    fetchWeather: function (city) {
         // tell the fetch what to fetch, the parameters is city and it tells the function to look up the data for the city inputted
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        // once it has fetched the then tells it what to do with it
            .then((response) => response.json())
            // then get the data from the json and log it in the console
            .then((data) => this.displayWeather(data));
    },
     // function to display the weather on the html page
    // the function will take in the data and display the weather
    displayWeather: function (data) {
         // extracting the data-----get the data for each html class
    // below, this will extract the name from the object which will be what ever city the user inputs
        const { name } = data;
        // below the .notation is telling it where to get the icon and description which is under the weather tab in the file, this is the same for all the rest of the const
    // when consoled the first time the icon and description came out as undefined, the problem was unlike other tabs, weather is under an array and not an object, so to reach the icon in the array enter the position in the [] to extract the data from the array instead of the object
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // now that the data is extracted it needs to be put in the html page
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
        // js to remove whether until dummy text loads
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    // search function for the add event listener
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

// to make the search bar work
        document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
// event listener for when the user presses the enter key
        document.querySelector(".search-bar").addEventListener("keyup", function (event) {
            if (event.key == "Enter") {
                weather.search();
    }
    });

// dummy text
    weather.fetchWeather("London");