let btn = document.querySelector('button');
btn.addEventListener("click",async()=>{
    let fact= await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact; 
});

let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
    }catch(e){
        console.log("Error-",e);
        return "NO fact found";
    }
}



let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector('#btn');
btn2.addEventListener("click",async()=>{
    let link= await getImg();
    let img = document.querySelector("img");
    img.setAttribute("src",link); 
});
async function getImg(){
    try{
        let res = await axios.get(url2);
        console.log(res.data.message);
        return res.data.message;
    }catch(e){
        console.log("Error-",e);
        return "NO fact found";
    }
}

//      sendoing headers
let url3 = " https://icanhazdadjoke.com/";
async function getJoke(){
    try{
        const config = {headers:{Accept:"application/json"}};
        let res = await axios.get(url3,config);
        console.log( "jokes:",res.data.joke);
    }catch(e){
        console.log("Error-",e);
    }
}
getJoke();



