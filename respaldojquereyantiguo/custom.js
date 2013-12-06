$(document).bind("mobileinit", function(){
    $.mobile.pageLoadErrorMessage="Error en la carga";
});

$(document).bind("deviceready", function(){
    navigator.notification.alert("PhoneGap is initialized...");
});


/*iScroll desde el evento pageshow*/

/*		    
$( '#contenedorgeneral').live( 'pageshow',function(){

		
		
});
*/









