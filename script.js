const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
// const validate= document.getElementsById("validateform");
function btnClicked() { 

console.log(username);
console.log(password);

// if ( username == "admin" && password == "12345"){
//   alert ("Login successfully");
//   validate.setAttribute("action", "todo.html"); // Redirecting to other page.
//   return true;
//   }
//   else{
//   alert ("Login unsuccessfull");
//     return false;
//   } 
}

let btn = document.querySelector('#submit');
btn.addEventListener('click',btnClicked);
