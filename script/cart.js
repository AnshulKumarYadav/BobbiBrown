document.querySelector("#quantity_No").innerText = 6;
let item = document.querySelector("#\cart_product")
let cartDetails = JSON.parse(localStorage.getItem("bobcart")) || [];
cartDetails.map(function(elem){
    // main container for one item
    let div = document.createElement("div");
    div.setAttribute("id","p_details")

    // container for image
    let div1 = document.createElement("div");
    div1.setAttribute("id","img_details")
    let img = document.createElement("img");
    img.src = elem.image;
    div1.append(img);

    // container for details
    let div2 = document.createElement("div");
    div2.setAttribute("id","p_quantity");

    let div3 = document.createElement("div");
    div3.setAttribute("id","name_tag")
    let name = document.createElement("p");
    let remove = document.createElement("p");
    name.innerText = elem.name;
    // remove.innerHTML = <i class="fa-solid fa-xmark-large"></i>;
    div3.append(name,remove);

    let size = document.createElement("p");
    size.innerText = "Size: MRP inclusive of all taxes| 3g";


    let div4 = document.createElement("div");
    div4.setAttribute("id","p_price");
    let select = document.createElement("select");
    select.setAttribute("id","p_qty");
    select.addEventListener("click" ,function(){
        myfunction(elem)});
    let option1 = document.createElement("option");
    option1.value = "1";
    option1.innerText = "1";
    let option2 = document.createElement("option");
    option2.value = "2";
    option2.innerText = "2";
    let option3 = document.createElement("option");
    option3.value = "3";
    option3.innerText = "3";
    let option4 = document.createElement("option");
    option4.value = "4";
    option4.innerText = "4";
    let option5 = document.createElement("option");
    option5.value = "5";
    option5.innerText = "5";
    let option6 = document.createElement("option");
    option6.value = "6";
    option6.innerText = "6";
    let option7 = document.createElement("option");
    option7.value = "7";
    option7.innerText = "7";
    let option8 = document.createElement("option");
    option8.value = "8";
    option8.innerText = "8";
    select.append(option1,option2,option3,option4,option5,option6,option7,option8);
   
    
    let price = document.createElement("p");
    price.setAttribute("id","prod_price");
    price.innerText = elem.price;
    
    
    div4.append(select,price);
    div2.append(div3,size,div4);
    




    div.append(div1,div2);
    item.append(div);

})
function myfunction(){
    let quantity = document.getElementById("p_qty").value;
    console.log(quantity);
    let price1 = document.getElementById("prod_price").innerText;
    let total =`$ ${Number(price1)*Number(quantity)}`;

    price1 = total;
    console.log(price1);

    return price1;
}