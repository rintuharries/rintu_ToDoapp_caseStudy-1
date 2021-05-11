$(document).ready(function () { 
  var count=0;
  $('body').on('change','input[type=checkbox]',function(e) {                          
   if( $(this).is(':checked')){               
      count++;
   }else{
     count--;
   }
   var promise=new Promise(function(resolve,reject){
    if(count==5)
    {
      resolve("Congrats.5 Tasks have been successfully completed")
    }
  })
  promise.then(function(s){
    alert(s);
  })
  
   console.log(count)
}); 
                    // FETCHING DATA FROM JSON FILE
                    $.getJSON("https://jsonplaceholder.typicode.com/todos", 
                            function (data) {
                        var response = '';
                          var count="" 
                        // ITERATING THROUGH OBJECTS
                        $.each(data, function (key, value) {
  
                            //CONSTRUCTION OF ROWS HAVING
                            // DATA FROM JSON OBJECT
                            response+='<table>';
                            response += '<tr>';
                            if(value.completed==true)  {
                            response += '<td>' + '<input type="checkbox" checked="checked" disabled="disabled">'
                                 + '</td>';
                            }
                           
                            else  {
                              response += '<td>' + '<input type="checkbox" id="#btnClick" >'
                                 + '</td>';

                            }   
  
                            response+= '<td>' + 
                                value.title + '</td>';
  
  
                            response += '</tr>';
                            response+='</table>';

                        });
                          
                      
                        //INSERTING ROWS INTO TABLE 
                        $('#demo').append(response);
                      
                    });
                             


                  });
                 
  