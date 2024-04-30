/*************************************** part 8 ******************************************** */
// Qs1.Square and sum the array elements using the arrow function and then find the average of the array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let square = arr.map((num) => num * num);
// console.log(square);
// let sum = square.reduce((res, el) => res + el);
// console.log(sum);
// let avg = sum / arr.length;
// console.log(avg);


// Qs2.Create a new array using the map function whose each element is equal to the original element plus 5.
// let arr1 = [1, 2, 3, 4, 5];
// let arr11 = arr1.map((el) => el + 5);
// console.log(arr11);

//Qs3.Create a new array whose elements are in upper case of words present in the original array.
// let num1 = ['karishma', 'riya', 'mahi'];
// console.log(num1.map((num1) => num1.toUpperCase()));


// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.
// const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((v) => v * 2)];
// let array = [1, 2, 3, 4, 5];
// console.log(doubleAndReturnArgs(arr, 6, 7, 8, 9));



// Qs5.Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

// let mergeObjects = (obj1,obj2)=>({...obj1,...obj2});
// person1 = {
//     name: 'karishma',
//         age : 21,
// };
// person2 = {
//     name: 'riya',
//         age : 19,
// };
// console.log(mergeObjects(person1,person2));

// const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
// console.log(mergeObjects({a:1,b:2},{c:3,d:4}));//{a:1,b:2,c:3,d:4} 


/*************************************** part 9 ******************************************** */

//                                   DOM Manipulation
//Qs1.Create a new input and button element on the page using JavaScript only.Set the text of button to “Click me”;
let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText="Click me";
document.querySelector('body').append(inp);
document.querySelector('body').append(btn);

// Qs2.Add following attributes to the element :
// - Change placeholder value of input to “username”
// -Change the id of button to“ btn”
inp.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

// Qs3.Access the btn using the querySelector and button id. Change the button backgroundcolor to blue and text color to white.
let button = document.querySelector("#btn");
button.style.backgroundColor = "blue";
button.style.color = "white";

// Qs4.Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.
let h1 = document.createElement("h1");
h1.innerHTML="DOM Practice";
h1.style.textDecoration="underline";
h1.style.color="purple";
document.querySelector('body').append(h1);

// Qs5.Create a p tag on the page and set its text to “Apna College Delta Practice ”, where Delta is bold.
let p = document.createElement('p');
p.innerHTML="Apna College <b>Delta</b> Practice ";
document.querySelector('body').append(p);


/*************************************** part 9 ******************************************** */

// Qs1.Try out the following events in EventListener on your own:
// -mouseout
// -keypress
// -Scroll
// -load



// Qs2.Create a button on the page using JavaScript. Add an eventlistener to the button that changes the button’s color to green when it is clicked.
let buttn  = document.createElement('button');
buttn.innerText="click here";
buttn.addEventListener('click',function(){
    buttn.style.backgroundColor='green';
    buttn.style.color='white'
});
document.querySelector('body').append(buttn);

// Qs3.Create an input element on the page with a placeholder”enter your name” and an H2 heading on the page inside HTML.The purpose of this input element is to enter a user’s name so it should only input letters from a-z,A-Z and space (all other characters should not be detected).Whenever the user inputs their name,their input should be dynamically visible inside the heading.
// [Please note that no other character apart from the allowed characters should be visible in the heading]
let input = document.createElement('input');
document.querySelector('body').append(input);
input.setAttribute('placehholder','enter your name');
let h2 = document.getElementsByClassName('h2');
input.addEventListener("input",function(event){
    h2 = event.data;
    console.log(h2);

})     //xxxxx   wrong