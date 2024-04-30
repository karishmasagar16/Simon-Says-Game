//************************************ part 5 ******************************************* */
// Qs1.Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].
let num = console.log(Math.floor(Math.random() * 6) + 1);

// Qs2.Create an object representing a car that stores the following properties for the car :name,model,color.Print the car’sname.
let car = {
    name: "maruti suzuki",
    model: "maruti suzuki Dzire",
    color: "white"
};
console.log(car.name);

// Qs3.Create an object Person with their name,age and city.Edit their city’s original value to change it to“NewYork”.Add a new property country and set it to the United States.
let person = {
    name: "karishma",
    age: 21,
    city: "bsr"
};
person.city = "newyork";
person.country = "united states";
console.log(person);


//****************************************** part 6******************************* */


//Qs1: write a javascript function that return a array elements larger than a number.
let arr = [2, 3, 4, 5, 6, 7, 8, 1, 0, 12];
let n = 13;
function array(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n)
            console.log(arr[i]);
        else {
            console.log(`${n}is larger than the ${arr}`);
        }
    }
}
array(arr, n);


//Qs2: Write a JavaScript function to extract unique characters from a string. Example: str =   “abcdabcdefgggh”  ans=“abcdefgh”
// let string = prompt("enter a string");
// function uniqueCharacter(string) {
//     let ans = "";
//     for (let i = 0; i <= string.length; i++) {
//         let currChar = string[i];
//         if (ans.indexOf(currChar) == -1) {
//             ans = ans + currChar;
//         }
//     }
//     console.log(ans);
//     // return ans;
// }
// uniqueCharacter(string);

// Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.    Example: country=["Australia","Germany","UnitedStatesofAmerica"]    output:"UnitedStatesofAmerica"
let country = ["Australia", "Germany", "United States of America"];
function longestCountry(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currAns = country[i].length;
        if (ansLen < currAns) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(longestCountry(country));

//Q4. Write a JavaScript function to count the number of vowels in a String argument.
let string = prompt("enter a string");
function countVowel(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a' ||
            string[i] == 'e' ||
            string[i] == 'i' ||
            string[i] == 'o' ||
            string[i] == 'u')
            count++;
    }
    return count;
}
console.log(countVowel(string));


// Qs5.Write a JavaScript function to generate a random number with in a range(start,end).
let numberStart = prompt('enter a starting no. range');
let numberEnd = prompt('enter a ending no. range');
let start = Number(numberStart);
let end = Number(numberEnd);
function randomNumber(start, end) {
    let diff = end - start;
    let ans = Math.floor(Math.random() * diff) + start;
    console.log(ans);
}
randomNumber(start, end);

/*****************************  Part 7 *************************************** */

//Qs1.Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arrAvg = [2, 7, 8, 9, 6, 12, 34, 54];
let arrayAverage = (arrNum) => {
    let sum = 0;
    for (let item of arrNum) {
        sum = sum + item;
    }
    return sum / arrNum.length;
};
console.log(arrayAverage(arrAvg));


// Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let isEven = n => n % 2 == 0;
let number = prompt("enter a no.");
console.log(isEven(number));



