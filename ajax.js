function ajax(){

    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/todos';
    Http.open("GET", url);
    Http.send();
    
    Http.onreadystatechange = function() {
     if(this.readyState==4&&this.status==200){
      var response=JSON.parse(Http.responseText);
      var output =""
      output += "<table>"
      output+="<tr><th><u>Id</u></th><th><u>Title</u></th><th><u>Status</u></th></tr>";
      var checkedCount = 0;
      for(var i=0;i<response.length;i++){
        var status=response[i].completed;
        output += "<tr><td>" + response[i].id + "</td>"+"<td>" + response[i].title+"</td>"
 
        if(status==true){
         output+="<td>"+'<input type="checkbox" checked="checked" disabled=true>'+"</td></tr>";       
         }
          
         if(status==false){
          output+="<td>"+'<input type="checkbox">'+"</td></tr>";
          validate();
        }   
      }  
          
        output += "</table>"
        document.getElementById("demo").innerHTML=output;    
    } 
      
 }
}
function validate(){    
var inputs = document.getElementsByTagName("input"); //or document.forms[0].elements;
var cbs = []; //will contain all checkboxes
var checked = []; //will contain all checked checkboxes
for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].type == "checkbox") {
    cbs.push(inputs[i]);
    if (inputs[i].checked) {
      checked.push(inputs[i]);
    }
  }
}
var nbCbs = cbs.length; //number of checkboxes
var nbChecked = checked.length; //number of checked checkboxes
var promise=new Promise(function(resolve,reject){
  if(nbChecked==5){
    resolve("Congrats .5 Tasks have been successfully completed")
  }
});
promise.then(function(s){
  alert(s);
})
}




// function count(){
//   var checkedCount = 0;
//   document.querySelectorAll('checkbox').onchange = function() {
//   for(var i = 0; i < status.length; i++) {

//     if(status[i].checked==true) {
//       checkedCount++;
//     }
//     console.log(checkedCount);

//     }
//     }
//   } 

 
