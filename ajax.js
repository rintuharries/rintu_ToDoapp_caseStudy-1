function ajax(){

    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/todos';
    Http.open("GET", url);
    Http.send();
    
    Http.onreadystatechange = function() {
     if(this.readyState==4&&this.status==200){
      var response=JSON.parse(Http.responseText);
      var output =""
      var checked=""
      output += "<table>"
      output+="<tr><th><u>Id</u></th><th><u>Title</u></th><th><u>Status</u></th></tr>";
      for(var i=0;i<response.length;i++){
        var status=response[i].completed;
        checked='checked'
        output += "<tr><td>" + response[i].id + "</td>"+"<td>" + response[i].title+"</td>"
 
        if(status==true){
         
         output+="<td>"+'<input type="checkbox" disabled="disabled" '+checked+'>'+"</td></tr>"; 
         }
          
         if(status==false){
          output+="<td>"+'<input type="checkbox">'+"</td></tr>"
            // var countval= $("[type='checkbox']:checked").length;
        }   
      }   
        output += "</table>"
        
        document.getElementById("demo").innerHTML=output;  
        //  console.log(countval);
       }
    } 
   
      
 }
function validate(){
  const checkboxes=document.querySelectorAll('checkbox');
  var count=0;
 var promise=new Promise(function(resolve,reject){  
     $('body').on('change','input[type=checkbox]',function(){
      for(var i=0;i<checkboxes.length;i++){
      if(checkboxes.checked){
        count+=1;
      }
      }
     });
  if(count==5){
    resolve("Congrats .5 Tasks have been successfully completed")
  }
});
promise.then(function(s){
  alert(s);
})
}






 
