// //************************** Part 1 ***************************** */
// // Ques1: Declare your name as a string and print its length in JS.
// // let name = "karishma";
// // console.log(name.length);

// //Ques2: Declare your first name as as string and print its first character.
let firstname ="joy";
console.log(firstname[0]); 

//Ques3: Declare your first name as  a string and print its last character.
firstname = "Riya";
console.log(firstname.length-1);

//Ques4: What is the output of this:  "apnaCollege"+123
let id="apnaCollege"+123;
console.log(id);

//Ques5: What are lengths of an empty string with a simgle space?
let emptyString = " ";
console.log(emptyString.length);

//************************** Part 2 ***************************** */
// Ques1: Create a number variable num with some value.Now print "good" if the no. is divisible by 10 and print "bad" if it is not.
let num = prompt("Enter any number :");
if(num%10==0){
    console.log("Good");
}else{
    console.log("Bad");
}

//Ques2: take the user's name & age as input using prompts. Then  return back the following statement to the user as an alert(by substituting their name and age):   name is age years old.
let name = prompt("Enter your name: ");
let age = prompt("Enter your age :");
alert(`${name} is ${age} years old`);

//Ques3: Write a switch statement to print the months in a quarter.
// Months in Quarter 1: january,february,march
// Months in Quarter 2: april,may,june
// Months in Quarter 3: july,august,september
// Months in Quarter 4: october,november,december
let quarter = 2;
switch(quarter){
    case 1:
        console.log("january,february,march");
    break;
    case 2:
        console.log("april,may,june");
    break;
    case 3:
        console.log("july,august,september");
    break;
    case 4:
        console.log("october,november,december");
    break;
    default : console.log("not a Quarter");
}

//Ques4: a string is a golden string if it starts with a character 'a' or 'A' and has total length greater than 5. For a griven string print if it is golden or not.
let goldenString = prompt("enter any string");
if((goldenString[0]==='a' || goldenString[0]==='A') && goldenString.length>5){
    console.log("string is golden");
}else{
    console.log("string is not golden");
}

//Ques5: Write a program to find the largest of 3 numbers.
let a=20,b=21,c=11;
if(a>b){
    if(a>c){
        console.log(a, "is greater")
    }
    else {
        console.log(c, "is greater");
    }
}else{
    if(b>c){
            console.log(b, "is greater")
        }
        else {
            console.log(c, "is greater");
        }
}

//Ques6:  Write a program to check  if 2 numbers have the same last digit. Eg: 32 and 3432 have the same digit i.e. 2
let num1 = prompt("enter first number :");
let num2 = prompt("enter second number :");
if((num1%10) == (num2%10)){
    console.log("the last digit of both numbers are same");
}else{
    console.log("the last digit of both numbers are not same");   
}