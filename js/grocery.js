
$("button").click(function click(){ 
  var f=1;
  
  $(document).ready(function (){
    $.getJSON("grocery.json", function(data){
        var grocerydata = '';
        $.each(data, function(key, value){
            grocerydata += `<tr>`;
              grocerydata += `<td>`+value.sno+`</td>`;
              grocerydata += `<td>`+value.name+`</td>`;
              grocerydata += `<td>`+value.qty+`</td>`;
              grocerydata += `<td>`+value.unit+`</td>`;
              grocerydata += `<td>`+value.dpt+`</td>`;
              grocerydata += `<td>`+value.notes+`</td>`;
            grocerydata += `</tr>`;
        });
        $('#grocery-list').append(grocerydata); 
    });
    });
    $("button").attr("disabled",true);
});



