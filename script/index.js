let read=(ids)=>{
  return document.getElementById(ids);
}

import { navbar } from "../components/navbar.js";

read("header").innerHTML= navbar();


//http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline

const url= `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;

import { getData,appenData } from "./indexFetch.js";

getData(url).then((data) => {
    let gallery = read("gallery");
    appenData(data,gallery);
})

import {foot} from "../components/footer.js";

read("footer").innerHTML = foot();