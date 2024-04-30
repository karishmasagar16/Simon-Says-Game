// //******************** Part 3 ************************************ */
// //Ques1: Write a javascript program to get the first  n elements of an array.[n can be any positive number]. for example : for array[7,9,0,-2] and n=3 then print [7,9,0]
// let arr = [2,5,7,-4,6,7,-2,-1];
// let n=4;
// let ans = arr.slice(0,n);
// console.log(ans);

// //Ques2: write a javascript program to get the last n elements of an array.[n can be any positive number]. for example : for array[7,9,0,-2] and n=3 then print [9,0,-2]
// arr = [2,5,7,-4,6,7,-2,-1];
// n=5;
// ans=arr.slice(length-n);
// console.log(ans);

// //Ques3: write a javascript program to check whether a string is blank or not.
// let str = prompt("enter any string");
// if(str.length==0){
//     console.log("string is blank");
// }else{
//     console.log("string is not blank");
// }

// //Ques4: write a javascript program to test whether the character at the given (character) index is lowercase.
// let str1 = prompt("enter any string");
// let idx = prompt("please enter the index you choose  of string");
// if(str1[idx] == str1[idx].toLowerCase()){
//     console.log("character is in lowercase");
// }else{
//     console.log("character is not in lowercase");}

// //Ques5: write a javasript program to strip leading and trailing spaces from a string.   
// let string = prompt("enter any string");
// console.log(`original string = ${string}`);
// console.log(`string without spaces = ${string.trim()}`); 


// //Ques6: write a javasript program to check if an element exists in an array or not.
// let arr1 = [2,4,6,5,3,1];
// let checkNo =  9;
// if( arr1.indexOf(checkNo) != -1){
//     console.log("element exists in array");
// }else{
//     console.log("element doesn't exists in array"); 
// }



//********************************* Part 4 ********************************** */
//Ques 1: write a js program to delete all occurrances of element 'num' in a given array. Example : if arr = [1,2,3,4,7,9,2,0] &  num = 2.   result should be arr = [1,3,4,7,9,0]

// let arr = [2,4,3,1,6,7,2,8,2,0];
// let num =2;
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


// //Ques2: write a js program to find the no. of digits in a number. Eg: if number =287152, count = 6
// let n = prompt("enter a number");
// let count=0;
// console.log(n);
// while(n>0){
//     count++;
//     n= Math.floor(n/10);
// }
// console.log(count);


//Ques3: write a js program to find the sum of digits in a number. Eg: if number =287152, count = 25
// let n = prompt("enter a number");
// console.log(n);
// let copy=n;
// let sum = 0;
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy= Math.floor(copy/10);
// }
// console.log(sum);


//Qs4.Print the factorial of a number n.[Factorial of a number n is the product of all positive integers lessthan or equal to a given positive integer and denoted by that integer.]
// Example:7!(factorialof7)=1x2x3x4x5x6x7=5040
// 5!(factorialof5)=1x2x3x4x5=120
// 3!(factorialof3)=1x2x3=6 
// 0!Is always1
// let fac = prompt("enter a no. to find the factorial");
// let n=1;
// for(let i=1;i<=fac;i++){
//     n=n*i;
// }
// console.log(n);


//Qs5.Find the largest number in an array with only positive numbers.
let arr=[2,4,3,5,9,8,12,45,999,54,87,11];
let  largest=0;
for(let i=0;i<arr.length;i++){
    if(arr[i] >largest){
        largest=arr[i];
    }
}
console.log(largest);
