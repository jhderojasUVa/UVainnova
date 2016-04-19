// Javascript

$(document).ready(function(){
	setTimeout(function() {
		cerrar_aviso();
	}, 20000);

	$(".nav_tlf").on("change", function(){
		var url =$(this).val();
		if (url) {
			window.location = url;
		}
		return false;
	});

});

function cerrar_aviso() {
	$(".aviso").hide();
}
