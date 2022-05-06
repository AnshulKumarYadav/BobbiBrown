
let read=(ids)=>{
  return document.getElementById(ids);
}

read("left").addEventListener("click",hello);
read("right").addEventListener("click",hello2);



let i=-100;
function hello(){
read("gotta-Container").style.left=`${i}px`;
     i+=80;
     if(i<=-1320){
          read("left").style.display="none";
     }
     if(i==-20){
         read ("right").style.display="block";
     }
}
function hello2(){
     i-=80;
  read("gotta-Container").style.left=`${i}px`;
 if(i==-1300){
     read("left").style.display="block";
 }
 if(i==60){
     read("right").style.display="none";
 }
}



read("galLeft").addEventListener("click",slide);
read("galRight").addEventListener("click",slide2);



let j=-100;
function slide(){
read("gallery").style.left=`${j}px`;
     j+=80;
     if(j<=-1320){
          read("galLeft").style.display="none";
     }
     if(j==-20){
         read ("galRight").style.display="block";
     }
}
function slide2(){
     j-=80;
  read("gallery").style.left=`${j}px`;
 if(j==-1300){
     read("galLeft").style.display="block";
 }
 if(j==60){
     read("galRight").style.display="none";
 }
}