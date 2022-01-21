// Task 1 - create an alert or display in the DOM

// current date set the variable and object

const date = new Date(); 

// connect the new variable to the id in html to place it next to the text in browser

document.getElementById("task1current").innerHTML = date;

// alert the date

alert(date);
alert(date.toUTCString());

// set a variable to my birthday

const mydob = new Date(1996,05,19);

// connect the new variable to the id in html to place it next to the text in browser

document.getElementById("task1dob").innerHTML = mydob;

// alert the date

alert(mydob);
alert(mydob.toUTCString());


// convert dates to UTC 

// alert(date.toUTCString)

// const date = new Date();
// let utcDate = date.toUTCString();
// document.getElementById("convertDate").innerHTML = utcDate; === this does not work sara


// Task 2 - change the background colour

// create a function for the onclick

function newBackground() {
    var favColour = prompt("What is your favourite colour?").toLowerCase();document.body.style.backgroundColor = favColour;
}
// // set variable to give prompt message on click for the person to input the colour
// add lower case adjustment
// direct the function to the body tag to execute the change in background color using the colour given in the input

// Task 3 - site with three clickable div

document.getElementById("rose").addEventListener("click", revealName);

function revealName() {
    document.getElementById("rose").innerHTML = "Rose";
}

document.getElementById("lavender").addEventListener("click", revealName);

function revealName() {
    document.getElementById("lavender").innerHTML = "lavender";
}

document.getElementById("valerian").addEventListener("click", revealName);

function revealName() {
    document.getElementById("valerian").innerHTML = "valerian";
}




// I got a bit stuck on this assignment and looked at google, others code and stack overflow to try and understand it, it was hard but I now understand it much better