let read=(ids)=>{
  return document.getElementById(ids);
}

import { navbar } from "../components/navbar.js";

read("header").innerHTML= navbar();
