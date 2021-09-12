
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
        var row= document.getElementsByTagName("tr");
        row[0].style.color="black";
        row[0].style.fontSize="large";
        row[0].style.fontWeight="bold";
        row[0].style.background="green";
    });
    });
    $("button").attr("disabled",true);
});



