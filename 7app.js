// let jsonRes = '{"fact":"Cats have 300 million neurons; dogs have about 160 million","length":58}'
// console.log(jsonRes);
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);


//     our first request
let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) => {
//         // console.log(res);
//         return res.json();
//     }).then((data) => {
//         console.log("data1:",data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         // console.log(res);
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2:",data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR", err);
//     })


//       our request with async amd await 
async function getFacts(){
    try{
        let res =  await fetch(url);
        let data = await res.json();
        console.log(data.fact);
//chaining
        let res2 =  await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch(e){
        console.log("error=",e);
    }
    console.log("bye");
}
console.log("hello");
getFacts();

//    axios
async function getFacts(){
    try{
        let res = await axios.get(url);

        console.log(res.data.fact);
    }catch(e){
        console.log(e);
    }
}