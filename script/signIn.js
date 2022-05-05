import { navbar } from "../components/navbar.js";
document.getElementById("header").innerHTML = navbar()

import { foot } from "../components/footer.js";
document.getElementById("footer").innerHTML = foot()

// -----------------------------------------------SIGNIN PAGE-------------------------------------------------------

let register = async (e) => {
    e.preventDefault();

    let form_data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,

    };

    form_data = JSON.stringify(form_data);

    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: form_data,
        mode: "no-cors",
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


//   -----------------------------------------------LOGIN PAGE-------------------------------------------------------
  let login = async () =>{
    let user_data1 = {
        email: document.getElementById("email1").value,
        password: document.getElementById("password1").value,
    }
    if(user_data1 = JSON.stringify(user_data1)){
        alert("LogIn successful")
    }
    else{
      alert("Wrong Email or password")
    }

    let res = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/login",
    {
        method: 'POST',
        body:user_data1,
        mode: "no-cors",
        headers:{
            "Content-Type":"application/json"
        },
    });
    let data = await res.json();
    let email1 = document.getElementById("email").value;
    getUserDetail(email1,data.token)
    console.log(data)
    window.location.reload();
};
document.getElementById("logIn").addEventListener("click",login)

let getUserDetail = async(email1,token) =>{
   let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${email1}`,{
       headers:{
        "Authorization": `Bearer ${token}`
       }
   })
   let data = await res.json();
   console.log("User data",data);
   window.location.reload();
}