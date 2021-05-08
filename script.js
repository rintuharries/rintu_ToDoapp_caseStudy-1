var  username = document.getElementById("username");
var  password = document.getElementById("password");
const validate= document.getElementsById("validateform");
function btnClicked(){ 

console.log();
console.log();

if ( username == "admin" && password == "12345"){
  alert ("Login successfully");
  validate.setAttribute("action", "todo.html"); // Redirecting to other page.
  return true;
  }
  else{
  alert ("Login unsuccessfull");
    return false;
  } 
}

let btn = document.querySelector('#submit');
btn.addEventListener('click',btnClicked);
