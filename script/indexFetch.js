let getData= async(url)=>{
    try{
        let res = await fetch(url);
        let data = await res.json();
        
        return data;
    }catch(e){
        console.log("e: ", e);

    }
}

let appenData =(data,gallery)=>{
    data.map(({image_link})=>{
        let img = document.createElement("img");
        img.src = image_link;

        let div = document.createElement("div");
        div.append(img);

        gallery.append(div);
    })
}

export {getData,appenData};