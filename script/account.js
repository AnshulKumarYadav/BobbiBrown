import { navbar } from "../components/navbar.js";
document.getElementById("header").innerHTML = navbar()

import { foot } from "../components/footer.js";
document.getElementById("footer").innerHTML = foot()

let  details = JSON.parse(localStorage.getItem("userData"));

    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerText = "Name : "+details.name

    let div1 = document.createElement("div")
    let p1 = document.createElement("p");
    p1.innerText = "Email : "+ details.email

    let div2 = document.createElement("div")
    let p2 = document.createElement("p");
    p2.innerText = "Newsletters: Yes"

    let div3 = document.createElement("div")
    let p3 = document.createElement("p");
    p3.innerText = "Mobile : "+details.mobile

    let div4 = document.createElement("div")
    let p4 = document.createElement("p");
    p4.innerText = " Loyalty : Yes"

    let div5 = document.createElement("div")
    let p5 = document.createElement("p");
    p5.innerText = "Connected Accounts : None"

    let div6 = document.createElement("div")
    let p6 = document.createElement("a");
     p6.innerText = "View Account"
     p6.href="/BobbiBrown/index.html"
     p6.setAttribute("class","a")

    div.append(p)

    div1.append(p1)

    div2.append(p2)

    div3.append(p3)

    div4.append(p4)

    div5.append(p5)

    div6.append(p6)
    document.getElementById("container").append(div,div1,div2,div3,div4,div5,div6);