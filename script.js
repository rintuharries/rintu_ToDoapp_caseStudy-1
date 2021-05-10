
 const Validate=document.getElementById("validateform")
function btnClicked(){ 
if( document.getElementById("username").value == "admin" && document.getElementById("password").value == "12345")
  {
    Validate.setAttribute("action","todo.html")
   alert("login successfull");
  }
  else {
   alert ("Username or password incorrect");
  } 
 }
let btn = document.querySelector('#submit');
btn.addEventListener('click',btnClicked);


