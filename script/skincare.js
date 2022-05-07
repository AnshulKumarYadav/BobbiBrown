import { navbar } from "../components/navbar.js";
import { foot } from "../components/footer.js";

document.getElementById("header").innerHTML = navbar();

document.getElementById("footer").innerHTML = foot();


  import { searchproducts, append } from "../components/fetch.js";

  searchproducts("eyeliner").then((data)=>{
      console.log(data)
      let container = document.getElementById("container");
        append(data,container)
  })



//   async function abc() {

//     let data = await searchproducts("eyeliner");

//     console.log(data);

//     append(data,container)
//   }

  

  //   abc();