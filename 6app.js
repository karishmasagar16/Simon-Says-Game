//--------------------------- async keyword-----------------------------------
async function greet(){
     throw "error 404 not found"; // throw keyword throws an error
    return "hello!";
}

greet()
.then((result)=>{
    console.log("result was resolved");
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})


//---------------------------- async arrow fn example
let demo = async()=>{
    return 5;
};

//--------------------------- await keyword-----------------------------------
function getnum(){
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10);
            console.log(num);
            resolved();
        },1000);   
    });
}
async function demo(){
   await getnum();
   await getnum();
   await getnum();
}
demo();

//--------------------------------------
let h1 = document.querySelector('h1');

// function changeColor(color, delay) {
//     return new Promise((resolved,reject)=>{
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`change color to ${color}`);
//             resolved("color changed");
//         }, delay);
//     })   
// }
// handling rejection with await
function changeColor(color, delay) {
    return new Promise((resolved,reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`change color to ${color}`);
            resolved("color changed");
        }, delay);
    })   
}
async function color(){
    try{
        await  changeColor("red",1000);
        await  changeColor("blue",1000);
        await changeColor("green",1000);
        await  changeColor("yellow",1000);
        await  changeColor("orange",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a=10;
    console.log(a+10);
}
color();
