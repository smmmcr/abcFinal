var datos15;
var datos1;
function doIt(){
	$.ajax({
		type: "POST",
		url:  "https://movilmultimediasa.com/abcMobil/post.php",  
		data: {id: "dd"},
		success: function(data) {
		alert("data")				
		datos1=data;				
		}
	});
	alert("dd");
	return datos1;
}
function obtenreTextoSemana()
{
//return "ss";
	return "Estilos de Aprendizaje";
}
function getinfo(){
	uri="https://movilmultimediasa.com/abcMobil/post.php";
	$.getJSON(uri + '?function=' + 'check' + '&callback=?', function (json_data) {
		datos15=json_data;
	});
return datos15;
}