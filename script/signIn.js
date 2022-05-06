import { navbar } from "../components/navbar.js";
document.getElementById("header").innerHTML = navbar()

import { foot } from "../components/footer.js";
document.getElementById("footer").innerHTML = foot()

// -----------------------------------------------SIGNIN PAGE-------------------------------------------------------
let login = async () => {
  let user_data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
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

  let username = document.getElementById('email').value;
  getUserDetail(username, data.token);
  console.log(data);
};

document.getElementById("login").addEventListener("click", login);

let getUserDetail = async (username, token) => {
    console.log("here");
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  let data = await res.json();
  console.log("user data: ", data);
}




//   -----------------------------------------------Signup PAGE-------------------------------------------------------
let register = async (e) => {
  e.preventDefault();

  let form_data = {
    username: document.getElementById("usernameSignup").value,
    email: document.getElementById("emailSignup").value,
    password: document.getElementById("passwordSignup").value,
  }

  form_data = JSON.stringify(form_data);

  let res = await fetch(
    "https://masai-api-mocker.herokuapp.com/auth/register",
    {
      method: "POST",
      body: form_data,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      }
    }
  )

  let data = await res.json();
  console.log(data);
}

document.getElementById("submit").addEventListener("click", register);
 