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
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await res.json();
  console.log(data);
};

document.getElementById("submit").addEventListener("click", register);
// -------------------------------- login ------------------------
let login = async () => {
  let user_data = {
    username: document.getElementById("username1").value,
    password: document.getElementById("password1").value,
  };

  user_data = JSON.stringify(user_data);

  let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: user_data,

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();

  let username = document.getElementById('username1').value;
  getUserDetail(username, data.token);
  console.log(data);
};

document.getElementById("logIn").addEventListener("click", login);

// let userDetails = JSON.parse(localStorage.getItem("userData"))||[];
let getUserDetail = async (username, token) => {
    console.log("here");
    alert("Login Success")
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = await res.json();
  console.log("user data: ", data);
  // userDetails.push(data);
  localStorage.setItem("userData",JSON.stringify(data));
  window.location.href="/BobbiBrown/html/account.html"
};
