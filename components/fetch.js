let searchproducts= async(query)=>{

    

    try{

        // let query=document.getElementById("search").value;

        let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`);

        let data=await res.json();
        // console.log("data:",data);
        return data;

    }catch(err){
        console.log("err:",err);
    }

    

}


let append=(data,container)=>{
    data.forEach((el)=>{

        let div=document.createElement("div");
        div.setAttribute("id","box");
        
        let img=document.createElement("img");
        div.setAttribute("class","image");

        let h2=document.createElement("h2");
        
        let p1=document.createElement("p");
        
        let h=document.createElement("h3");
        
        let p2=document.createElement("p");

        let btn=document.createElement("button");
        btn.innerText="ADD TO BAG";
        div.setAttribute("class","button");
        btn.backgroundColor="black";
        btn.color="white";

        btn.addEventListener("click",function() {
            addtobag(el);
            
        });
        let c=document.createElement("p");

        img.src=el.image_link;
        h2.innerText="BobbiBrown";
        h2.style.textTransform="uppercase";
    
        p1.innerText=el.name;

        h.innerText=el.category;
        h.style.textTransform="uppercase";
        h.style.color="grey";
        p2.innerText= `$ ${el.price}`
        // c.innerText=product_colors;
        
        div.append(img,h2,p1,h,p2,btn);
        div.id="box";
        container.append(div);
        
        
    });
}

let addbag=JSON.parse(localStorage.getItem("bobcart")) || [];

function addtobag(el){
    // console.log(el);
    addbag.push(el);
    localStorage.setItem("bobcart",JSON.stringify(addbag));
}

export{searchproducts,append};
