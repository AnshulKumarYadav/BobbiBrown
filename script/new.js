

 import {navbar} from "../components/navbar.js"
 import {foot} from "../components/footer.js"

 document.getElementById("header").innerHTML= navbar()



 document.getElementById("footer").innerHTML= foot()




 let newData = [
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg",
      name: "INCANDESCENT",
      description: "Our ultimate quick eye shadow stick",
      price: "30.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
      name: "BISQUE",
      description: "Discoloration neutralizer for undereyes & face",
      price: "32.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg",
      name: "HONEY",
      description: "Easy-to-use, long-lasting concealer stick",
      price: "32.00",
      same: " Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
      name: "INTENSIVE SERUM CONCEALER",
      description: "Brightens and boosts hydration",
      price: "45.00",
      same: "LAst Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW5632_600x600_0.jpg",
      name: "PRETTY POWERFUL",
      description: "Pretty Powerful cheek & lip color",
      price: "34.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCW01_600x600_0.jpg",
      name: "PINKY GLOW",
      description: "Pearl-infused illuminator",
      price: "50.00",
      same: "No More Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg",
      name: "BARE CLARET",
      description: "THE CARLET COLLECTION",
      price: "34.00",
      same: "2 Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg",
      name: "SUN DIP",
      description: "LUX EYE SHADOW",
      price: "28.00",
      same: "Only 4 Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg",
      name: "EXTRA CLEANSING BALM",
      description: "Purifying, conditioning cleanser",
      price: "56.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR201_600x600_0.jpg",
      name: "EXTRA SKINCARE PACKAGE",
      description: "LUX EYE SHADOW",
      price: "125.00",
      same: "Only Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg",
      name: "INCANDESCENT",
      description: "Our ultimate quick eye shadow stick",
      price: "30.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
      name: "BISQUE",
      description: "Discoloration neutralizer for undereyes & face",
      price: "32.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg",
      name: "HONEY",
      description: "Easy-to-use, long-lasting concealer stick",
      price: "32.00",
      same: " Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
      name: "INTENSIVE SERUM CONCEALER",
      description: "Brightens and boosts hydration",
      price: "45.00",
      same: "LAst Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW5632_600x600_0.jpg",
      name: "PRETTY POWERFUL",
      description: "Pretty Powerful cheek & lip color",
      price: "34.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCW01_600x600_0.jpg",
      name: "PINKY GLOW",
      description: "Pearl-infused illuminator",
      price: "50.00",
      same: "No More Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg",
      name: "BARE CLARET",
      description: "THE CARLET COLLECTION",
      price: "34.00",
      same: "2 Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg",
      name: "SUN DIP",
      description: "LUX EYE SHADOW",
      price: "28.00",
      same: "Only 4 Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg",
      name: "EXTRA CLEANSING BALM",
      description: "Purifying, conditioning cleanser",
      price: "56.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR201_600x600_0.jpg",
      name: "EXTRA SKINCARE PACKAGE",
      description: "LUX EYE SHADOW",
      price: "125.00",
      same: "Only Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg",
      name: "INCANDESCENT",
      description: "Our ultimate quick eye shadow stick",
      price: "30.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
      name: "BISQUE",
      description: "Discoloration neutralizer for undereyes & face",
      price: "32.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg",
      name: "HONEY",
      description: "Easy-to-use, long-lasting concealer stick",
      price: "32.00",
      same: " Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg",
      name: "INTENSIVE SERUM CONCEALER",
      description: "Brightens and boosts hydration",
      price: "45.00",
      same: "LAst Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EW5632_600x600_0.jpg",
      name: "PRETTY POWERFUL",
      description: "Pretty Powerful cheek & lip color",
      price: "34.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCW01_600x600_0.jpg",
      name: "PINKY GLOW",
      description: "Pearl-infused illuminator",
      price: "50.00",
      same: "No More Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETCY12_600x600_0.jpg",
      name: "BARE CLARET",
      description: "THE CARLET COLLECTION",
      price: "34.00",
      same: "2 Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg",
      name: "SUN DIP",
      description: "LUX EYE SHADOW",
      price: "28.00",
      same: "Only 4 Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERAN01_600x600_0.jpg",
      name: "EXTRA CLEANSING BALM",
      description: "Purifying, conditioning cleanser",
      price: "56.00",
      same: "A Few Left",
    },
    {
      image:
        "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ETR201_600x600_0.jpg",
      name: "EXTRA SKINCARE PACKAGE",
      description: "LUX EYE SHADOW",
      price: "125.00",
      same: "Only Few Left",
    },
  ];

  //console.log(object)
  displaydata(newData);

  function displaydata(data) {
    let div = (document.getElementById("maincontainers").innerHTML = "");

    data.map((data) => {
      let div = document.createElement("div"); //////
      div.setAttribute("class", "box");

      let imgdiv = document.createElement("div"); //image
      imgdiv.setAttribute("class", "imgbox");

      let image = document.createElement("img");
      image.setAttribute("id", "productimage");
      image.src = data.image;

      let textdiv = document.createElement("div");
      textdiv.setAttribute("class", "textbox");

      let name = document.createElement("h6");
      name.innerText = data.name;

      let description = document.createElement("h4");
      description.innerText = data.description;

      let price = document.createElement("h3");
      price.innerText = `$ ${data.price} ` ;

      let same = document.createElement("p");
      same.innerText = data.same;

      var cart = document.createElement("button");
      cart.innerText = "ADD TO BAG";
      cart.setAttribute("id", "cart");
      cart.style.background = "black";
      cart.style.color = "white";
      cart.addEventListener("click", function () {
        addToCart(data);
      });

      imgdiv.append(image);
      textdiv.append(name, description, price, same, cart);

      div.append(imgdiv, textdiv);

      document.querySelector("#maincontainers").append(div);

      //console.log("working")
    });
  }

  let cartArr = JSON.parse(localStorage.getItem("bobcart")) || [] 

  function addToCart(data) {
    console.log("working add to cart")

    cartArr.push(data);
    localStorage.setItem("bobcart", JSON.stringify(cartArr));
    alert("Successfully Added");
    console.log(cartArr);

  }