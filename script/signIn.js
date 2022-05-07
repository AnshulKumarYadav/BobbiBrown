import { navbar } from "../components/navbar.js";
document.getElementById("header").innerHTML = navbar()

import { foot } from "../components/footer.js";
document.getElementById("footer").innerHTML = foot()

let register = async (e) => {
  e.preventDefault();

  let form_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };

  form_data = JSON.stringify(form_data);

  let res = await fetch(
    "https://masai-api-mocker.herokuapp.com/auth/register",
    {
      method: "POST",
      body: form_data,
      // mode: "no-cors"
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await res.json();
  console.log(data);
  alert("SignIn successfull")
};

document.getElementById("submit").addEventListener("click", register);
// -------------------------------- login ------------------------
let login = async () =>{
  let user_data = {
      username: document.getElementById("username1").value,
      password: document.getElementById("password1").value,
  }
  if(user_data = JSON.stringify(user_data)){
      alert("LogIn successful")
  }
  else{
      alert("Wrong UserName or Password")
  }

  let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/login",
  {
      method: 'POST',
      body:user_data,
      mode: "no-cors",
      headers:{
          "Content-Type":"application/json"
      },
  });
  let data = await res.json();
  let username1 = document.getElementById("username1").value;
  getUserDetail(username1,data.token)
  console.log(data)
};
document.getElementById("logIn").addEventListener("click",login)

let getUserDetail = async(username1,token) =>{
 let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username1}`,{
     headers:{
      "Authorization": `Bearer ${token}`
     }
 })
 let data = await res.json();
 console.log("User data",data);
}