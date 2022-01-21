// Task one - build an array

//1

const food = ['pasta','curry','pizza','pie'];

console.log(food);

//2

console.log(food[2]);

//3

console.log(food);

//4
food.push('paella')

console.log(food);

//5

food[1] = 'thaicurry';

console.log(food);


//Task two - input two numbers that are multiplied together and presented

//1
function multiply() {
const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value);

alert(num1 * num2);
}

//Task 3 -



//Task three - input one value and compare this through boolean logic to return a result
//1 * prompt with inputs 
// 1* IF statement 
// 1* alert or print the result to DOM

function answer(){
    const four = document.getElementById("four").value;

    if (four === '4'){
        alert("Correct, well done!");
    }else {
        alert("Incorrect, please try again");
    }
} 

//Task four - display the content of an array in a table within the DOM

// create an array 
// iterate through the array with a loop 
// tr td each result in the loop 
// document.getElementById("")

//I am lost with this one