let read=(ids)=>{
  return document.getElementById(ids);
}

import { navbar } from "../components/navbar.js";

read("header").innerHTML= navbar();


//http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline

const url= `https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=foundation`;

import { getData,appenData } from "./indexFetch.js";

getData(url).then((data) => {
    let gallery = read("gallery");
    appenData(data,gallery);
})

import {foot} from "../components/footer.js";

read("footer").innerHTML = foot();




let search = (e)=>{
  if(e.key=="Enter"){
    window.location.href="./html/search.html";
    localStorage.setItem("key",JSON.stringify(read("search").value));
  }
}

read("search").addEventListener("keydown",search);




let newData = [
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg",
    name: "INCANDESCENT",
    category: "Our ultimate quick eye shadow stick",
    price: "30.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
    name: "BISQUE",
    category: "Discoloration neutralizer for undereyes & face",
    price: "32.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg",
    name: "HONEY",
    category: "Easy-to-use, long-lasting concealer stick",
    price: "32.00",
    same: " Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
    name: "INTENSIVE SERUM CONCEALER",
    category: "Brightens and boosts hydration",
    price: "45.00",
    same: "LAst Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW5632_600x600_0.jpg",
    name: "PRETTY POWERFUL",
    category: "Pretty Powerful cheek & lip color",
    price: "34.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCW01_600x600_0.jpg",
    name: "PINKY GLOW",
    category: "Pearl-infused illuminator",
    price: "50.00",
    same: "No More Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg",
    name: "BARE CLARET",
    category: "THE CARLET COLLECTION",
    price: "34.00",
    same: "2 Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg",
    name: "SUN DIP",
    category: "LUX EYE SHADOW",
    price: "28.00",
    same: "Only 4 Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg",
    name: "EXTRA CLEANSING BALM",
    category: "Purifying, conditioning cleanser",
    price: "56.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR201_600x600_0.jpg",
    name: "EXTRA SKINCARE PACKAGE",
    category: "LUX EYE SHADOW",
    price: "125.00",
    same: "Only Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg",
    name: "INCANDESCENT",
    category: "Our ultimate quick eye shadow stick",
    price: "30.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
    name: "BISQUE",
    category: "Discoloration neutralizer for undereyes & face",
    price: "32.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg",
    name: "HONEY",
    category: "Easy-to-use, long-lasting concealer stick",
    price: "32.00",
    same: " Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
    name: "INTENSIVE SERUM CONCEALER",
    category: "Brightens and boosts hydration",
    price: "45.00",
    same: "LAst Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW5632_600x600_0.jpg",
    name: "PRETTY POWERFUL",
    category: "Pretty Powerful cheek & lip color",
    price: "34.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCW01_600x600_0.jpg",
    name: "PINKY GLOW",
    category: "Pearl-infused illuminator",
    price: "50.00",
    same: "No More Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg",
    name: "BARE CLARET",
    category: "THE CARLET COLLECTION",
    price: "34.00",
    same: "2 Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg",
    name: "SUN DIP",
    category: "LUX EYE SHADOW",
    price: "28.00",
    same: "Only 4 Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg",
    name: "EXTRA CLEANSING BALM",
    category: "Purifying, conditioning cleanser",
    price: "56.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR201_600x600_0.jpg",
    name: "EXTRA SKINCARE PACKAGE",
    category: "LUX EYE SHADOW",
    price: "125.00",
    same: "Only Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg",
    name: "INCANDESCENT",
    category: "Our ultimate quick eye shadow stick",
    price: "30.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
    name: "BISQUE",
    category: "Discoloration neutralizer for undereyes & face",
    price: "32.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg",
    name: "HONEY",
    category: "Easy-to-use, long-lasting concealer stick",
    price: "32.00",
    same: " Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
    name: "INTENSIVE SERUM CONCEALER",
    category: "Brightens and boosts hydration",
    price: "45.00",
    same: "LAst Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW5632_600x600_0.jpg",
    name: "PRETTY POWERFUL",
    category: "Pretty Powerful cheek & lip color",
    price: "34.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCW01_600x600_0.jpg",
    name: "PINKY GLOW",
    category: "Pearl-infused illuminator",
    price: "50.00",
    same: "No More Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg",
    name: "BARE CLARET",
    category: "THE CARLET COLLECTION",
    price: "34.00",
    same: "2 Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg",
    name: "SUN DIP",
    category: "LUX EYE SHADOW",
    price: "28.00",
    same: "Only 4 Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg",
    name: "EXTRA CLEANSING BALM",
    category: "Purifying, conditioning cleanser",
    price: "56.00",
    same: "A Few Left",
  },
  {
    image_url:
      "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR201_600x600_0.jpg",
    name: "EXTRA SKINCARE PACKAGE",
    category: "LUX EYE SHADOW",
    price: "125.00",
    same: "Only Few Left",
  },
];


var gotta = document.querySelector("#gotta-Container");

newData.map(function(el){
  let img = document.createElement("img");
  img.src = el.image_url;
  
  let name = document.createElement("h4");
  name.innerText= el.name;
  
  let title = document.createElement("p");
  title.innerText = el.category;
  
  let price = document.createElement("p");
  price.innerText = `$ ${el.price}`;
  
  var cart = document.createElement("button");
  cart.innerText = "ADD TO BAG";
  cart.setAttribute("id", "cart");
  cart.style.background = "black";
  cart.style.color = "white";
  cart.addEventListener("click", function () {
    addToCart(data);
    });

  let div = document.createElement("div");
  div.append(img,name,title,price,cart);
  
  gotta.append(div);
})

document.querySelector(".new").addEventListener("click",displaydata);

function displaydata(){
  var gotta = document.querySelector("#gotta-Container");
  gotta.innerHTML = " ";
  newData.map(function(el){
    let img = document.createElement("img");
    img.src = el.image_url;
    
    let name = document.createElement("h4");
    name.innerText= el.name;
    
    let title = document.createElement("p");
    title.innerText = el.category;
    
    let price = document.createElement("p");
    price.innerText = `$ ${el.price}`;

    let same = document.createElement("p");
    same.innerText =el.same;
    
    var cart = document.createElement("button");
    cart.innerText = "ADD TO BAG";
    cart.setAttribute("id", "cart");
    cart.style.background = "black";
    cart.style.color = "white";
    cart.addEventListener("click", function () {
      addToCart(data);
      });
  
    let div = document.createElement("div");
    div.append(img,name,title,price,same,cart);
    
    gotta.append(div);
  })
  
}

let cartArr = JSON.parse(localStorage.getItem("bobcart")) || [] 

  function addToCart(data) {
    console.log("working add to cart")

    cartArr.push(data);
    localStorage.setItem("bobcart", JSON.stringify(cartArr));
    alert("Successfully Added");
    console.log(cartArr);

  }


