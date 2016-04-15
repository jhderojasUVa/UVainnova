// Javascript

$(document).ready(function(){
	setTimeout(function() {
		cerrar_aviso();
	}, 20000);
});

function cerrar_aviso() {
	$(".aviso").hide();
}