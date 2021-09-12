
$("button").click(function click(){ 
  var f=1;
  
  $(document).ready(function (){
    $.getJSON("grocery.json", function(data){
        var grocerydata = '';
        $.each(data, function(key, value){
            grocerydata += `<tr>`;
              grocerydata += `<td id="td">`+value.sno+`</td>`;
              grocerydata += `<td id="td">`+value.name+`</td>`;
              grocerydata += `<td id="td">`+value.qty+`</td>`;
              grocerydata += `<td id="td">`+value.unit+`</td>`;
              grocerydata += `<td id="td">`+value.dpt+`</td>`;
              grocerydata += `<td id="td">`+value.notes+`</td>`;
            grocerydata += `</tr>`;
        });
        $('#grocery-list').append(grocerydata); 
        var row= document.getElementsByTagName("tr");
        var cl= document.getElementsByTagName("td");
        row[0].style.color="black";
        row[0].style.fontSize="large";
        row[0].style.fontWeight="bold";
        row[0].style.background="green";
        for(var i=0;i<row.length;i++){
          row[i].style.height="-10px";
          row[i].style.textAlign="center";
         
          
        }
          for(var j=6;j<cl.length;j++){
          cl[j].style.border="solid red";
                 
          
         }
         
        
    });
    });
    $("button").attr("disabled",true);
});



