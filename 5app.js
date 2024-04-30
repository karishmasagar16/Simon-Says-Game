// ********************************** breakpoints *****************************************
// function one(){
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans =  two() + one();
//     console.log(ans);
// }
// three();

//  ************************************ callback hell ********************************************
 //eg1
//  let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextChangeColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextChangeColor) {
//             nextChangeColor();
//         }
//     }, delay);
// }
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("orange", 1000, () => {
//             changeColor("green", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });    // callback nesting  ----> callabck hell


//eg2
// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 5) {
//         success();
//     } else {
//         failure();
//     }
// }
// saveToDB("apna college", () => {
//     console.log("success: your data was saved");
//     saveToDB("helloooo", () => {
//         console.log("siuccess 2: data 2 saved");
//         saveToDB("karishma", () => {
//             console.log("siuccess 3: data 3 saved");
//         }, () => {
//             console.log("failure 3: weak connection");
//         })
//     }, () => {
//         console.log("failure 2: weak connection");
//     })
// }, () => {
//     console.log("failure: weak connection");
// });
// ------------------------------------------------------------------


//  ************************************ promises ********************************************
// function saveToDB(data){
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//             if (internetSpeed > 5) {
//                 resolve("success: data was saved");
//             } else {
//                 reject("failure: weak connection");
//             }
//     });
// }
// saveToDB("apna college");


//  ************************************ promises --->>> then () and catch () ********************************************
function saveToDB(data){
    return new Promise((resolved,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed >4){
            resolved("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}
// let request = saveToDB("apna college");   // request = promise object
// request.then(()=>{
//     console.log("promise is resolved");
//     // console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     // console.log(request);
// });


//without request variable
saveToDB("apna college").then(()=>{
    console.log("promise is resolved");
})
.catch(()=>{
    console.log("promise was rejected");
});


//  ************************************ promise chaining ********************************************
function saveToDB(data){
    return new Promise((resolved,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed >4){
            resolved("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}
saveToDB("apna college").then(()=>{
    console.log("data 1.promise is resolved");
    return saveToDB("hello world");
})
.then(()=>{
    console.log("data 2.promise is resolved");
    return saveToDB("hello guys");
})
.then(()=>{
    console.log("data 3.promise is resolved");
    return saveToDB("hello joy");
})
.then(()=>{
    console.log("data 4.promise is resolved");
    return saveToDB("hello riya");
})
.catch(()=>{
    console.log("promise was rejected");
});




//  ************************************ results and error in promises  ********************************************

function saveToDB(data){
    return new Promise((resolved,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed >4){
            resolved("success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}
saveToDB("apna college").then((result)=>{
    console.log("data 1.promise is resolved");
    console.log(result);
    return saveToDB("hello world");
})
.then((result)=>{
    console.log("data 2.promise is resolved");
    console.log(result);
    return saveToDB("hello guys");
})
.then((result)=>{
    console.log("data 3.promise is resolved");
    console.log(result);
    return saveToDB("hello joy");
})
.then((result)=>{
    console.log("data 4.promise is resolved");
    console.log(result);
    return saveToDB("hello riya");
})
.catch(()=>{
    console.log("promise was rejected");
});

//********************************   change color using promises ****************************** */
 let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolved,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            resolved("color changed");
        }, delay);
    })   
}
changeColor("pink",1000).then(()=>{
    console.log("pink was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green was completed");
})
.catch(()=>{
    console.log("error");
})


