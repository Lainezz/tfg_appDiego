const handleForm = async (e) => {

    e.preventDefault();
    const {input_user, input_pass} = e.target

    console.log(input_user.value)
    console.log(input_pass.value)

    const datos = {
      "email": input_user.value,
      "password": input_pass.value,
    };

    console.log(datos)

    /* getData("http://192.168.1.132:3001/api/v1/productos").then(
      (data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      }
    ); */

    /* postData("http://192.168.1.132:3001/api/v1/users", datos).then(
      (data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      }
    ); */
    postData("http://localhost:3001/api/v1/users", datos).then(
      (data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      }
    );

}

async function getData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


async function postData(url = "", data={}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function inicializar_elementos_login() {

    const form_login = document.querySelector("#form-login");
    const button_form_login = document.querySelector("#button-form-login");

    form_login.addEventListener("submit", handleForm)



}



window.onload = inicializar_elementos_login();