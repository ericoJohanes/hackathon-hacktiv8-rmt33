let akun = [
  { ID: "user1", Password: "aku123", email: "aku@MediaList.com" },
  { ID: "user2", Password: "kamu123", email: "kamu@MediaList.com" },
];

const user = document.getElementById("user");
const pass = document.getElementById("pass");
const btnSignIn = document.getElementById("signIn");

const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const btnSignUp = document.getElementById("signUpButton");

btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  let user = username.value;
  let pass = password.value;
  let emailUser = email.value;
  sign(user, pass, emailUser, akun);
  // console.log(akun);
});

btnSignIn.addEventListener("click", function (e) {
  e.preventDefault();

  let username = user.value;
  let password = pass.value;
  //   console.log(username, password);
  login(username, password, akun);
});

function login(userID, Pass, data) {
  let status = false;
  let nilai;
  for (let user of data) {
    if (userID === user.ID) {
      status = true;
      nilai = user;
    }
  }
  if (status) {
    if (Pass === nilai.Password) {
      window.location.href = "./index.html";
      //   return "masuk";
    } else {
      alert("Password Salah");
    }
  } else {
    alert("Akun belum ada");
  }
}

// function login(userID, Pass, data) {
//   let status = false;
//   let statusPass = false;
//   for (let user of data) {
//     if (userID === user.ID) {
//       status = true;
//       if (Pass === user.Password) {
//         // console.log("sama");
//         statusPass = true;
//         break;
//       } else {
//         // console.log("password");
//         break;
//       }
//     }
//   }
//   if (status === true && statusPass === true) {
//     console.log("anda berhasil");
//   } else if (status === true && statusPass === false) {
//     console.log("id/pas salah");
//   } else {
//     console.log("belum");
//   }
//   return status;
// }

// console.log(login("user1", "aku123", akun));

function sign(inputID, inputPass, inputMail, data) {
  //   let result = data;
  for (let perUser of data) {
    // console.log(perUser);
    let isFlagId = false;
    let isFlagEmail = false;
    if (inputID === perUser.ID) {
      // console.log("id sudah ada");
      isFlagId = true;
      // break;
    }
    if (inputMail === perUser.email) {
      //   alert email sudah digunakan
      // console.log("email sudah digunakan");
      // return "email sudah digunakan";
      isFlagEmail = true;
      // break;
    }
    if (!isFlagEmail && !isFlagId) {
      let dataUser = {
        ID: inputID,
        Password: inputPass,
        email: inputMail,
      };
      akun.push(dataUser);
      const elementCustomAlert = document.createElement("div");
      elementCustomAlert.classList.add("alert");
      elementCustomAlert.innerText = "Register Berhasil";

      document.body.insertBefore(elementCustomAlert, document.body.children[0]);
      setTimeout(() => {
        elementCustomAlert.remove();
      }, 2000);
      break;
    } else if (isFlagId) {
      alert("Id sudah digunakan");
      break;
    } else if (isFlagEmail) {
      alert("Email sudah digunakan");
      break;
    }
  }
}

// console.log(sign('user5','aaa','asdasda',akun))
