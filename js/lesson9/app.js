// //let varName = 'Sara Villar'
// //let varAge = 25

// //console.log('Hello my name is ' + varName + ' and I am ' + varAge + 'years old');

// // let varNumber = 1;
// // // console.log(varNumber + 12);
// // varNumber = 54;

// // varNumber ++;
// // console.log(varNumber);

// // let varBoo = false
// // let VarLoo = true
// // console.log(typeof varBoo);

// // let firstName = 'Sara';

// // console.log('')

// // console.log(Math.floor(Math.random() * 6);

// // const breakfast = ['eggs','bacon','beans','mushroom','tomato']

// // breakfast.push('tea');

// // console.log(breakfast);

// const spacecraft = {
    
// }


// let inputDate = prompt('Please give a date')

// inputDate = new Date('2022-11-30')

// alert()




// document.getElementById('textchange').innerHTML = 'This is the changed and edited text';

// document.getElementsByTagName('h1')[0].innerHTML = 'This is the changed and edited text';


// document.getElementsByTagName('li')[1].style.backgroundColor = 'teal';

// console.log(document.querySelector('h1').innerHTML);


// foodboxevent1 = () => {
//     document.getElementsByClassName('foodbox').style.backgroundColor = 'teal';
// };
// foodboxevent2 = () => {
//     document.getElementsByClassName('foodbox').style.backgroundColor = 'pink';
// };
// document.getElementsByClassName('foodbox').innerHTML.addEventListener('mouseover',foodboxevent1);

// document.getElementsByClassName('foodbox').addEventListener('mouseout',foodboxevent2);


func1 = (data) => {
    document.querySelector('first name').innerHTML;
    console.log(data);
};

fetch('test.json')
    .then((res) => res.json())
    .then((data) => {
        func1(data);
    });