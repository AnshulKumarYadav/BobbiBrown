

import {navbar} from "../components/navbar.js";

let n=document.getElementById("header");
n.innerHTML=navbar();



// http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick
import{searchproducts,append} from "../components/fetch.js";

import{foot} from "../components/footer.js";

document.getElementById("footer").innerHTML=foot();



// let asearch=(e)=>{
//     let query=document.getElementById("search").value;
    
    
    
//     if(e.key==="Enter"){
//         searchproducts(query).then((data)=>{
//             console.log("data:",data);
            
//             let container=document.getElementById("container");
//             container.innerHTML=null;
            
//             append(data,container);
            
//         });
//     }
// }

// document.getElementById("search").addEventListener("keydown",asearch);

let search=(e)=>{
    
    let query=document.getElementById("inputSearch").value;
    
    if(e.key==="Enter"){
        searchproducts(query).then((data)=>{
            console.log("data:",data);
            
            let container=document.getElementById("container");
            container.innerHTML=null;
            
            append(data,container);
            
        });
    }
}

document.getElementById("inputSearch").addEventListener("keydown",search);


// let inputbox=document.getElementById("inputBox");

// console.log(inputbox);

function csearch(){
    // let submit=document.getElementById("submit");

     let query1=document.getElementById("inputSearch").value;

     console.log("submit");
    

    searchproducts(query1).then((data)=>{
        console.log("data:",data);

        let container=document.getElementById("container");
            container.innerHTML=null;
            
            append(data,container);
    })

}


    document.getElementById("inputBox").addEventListener("click",csearch);


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




let bob=JSON.parse(localStorage.getItem("key"));
console.log(bob);

searchproducts(bob).then((data)=>{
    let container = document.getElementById("container");
    append(data,container);
})
document.getElementById("inputSearch").value = bob;