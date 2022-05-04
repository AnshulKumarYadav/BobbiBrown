import {navbar} from "../components/navbar.js";

let n=document.getElementById("header");
n.innerHTML=navbar();

// http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick
import{searchproducts,append} from "../components/fetch.js";

let search=(e)=>{

    let query=document.getElementById("search").value;

    if(e.key==="Enter"){
        searchproducts(query).then((data)=>{
            console.log("data:",data);

            let container=document.getElementById("container");
            container.innerHTML=null;

            append(data,container);

        });
    }
}

document.getElementById("search").addEventListener("keydown",search);

// let searchproducts= async()=>{

    

//     try{

//         let query=document.getElementById("search").value;

//         let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`);

//         let data=await res.json();
//         console.log("data:",data);

//     }catch(err){
//         console.log("err:",err);
//     }

    

// }