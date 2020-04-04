
//JS FOR ALL WEBSITE
$(document).ready(function(){
	$(document).on("scroll", function(){
		if($(document).scrollTop() > 86){
		  $("#stickyNav").addClass("shrink");
		  $("#stickyNav").removeClass("transparent_navbar");
		}
		else{
			$("#stickyNav").addClass("transparent_navbar");
			$("#stickyNav").removeClass("shrink");
		}
	});
	//progress bar js
	$(document).on("scroll", function(){
		if($(document).scrollTop() > 1120){
		  $("#progRes").attr("style","width:95%;color:#218838;");
		}
		if($(document).scrollTop() > 1190){
			$("#progRes1").attr("style","width:95%;color:#218838;");
		}
		if($(document).scrollTop() > 1260){
			$("#progRes2").attr("style","width:80%;color:#218838;");
		}
		if($(document).scrollTop() > 1310){
			$("#progRes3").attr("style","width:90%;color:#218838;");
		}
		if($(document).scrollTop() > 1360){
			$("#progRes4").attr("style","width:95%;color:#218838;");
		}
		if($(document).scrollTop() > 1420){
			$("#progRes5").attr("style","width:90%;color:#218838;");
		}
	});
	//progress bar js end
    //modal js
   $("#modal_1").iziModal();
   $("#modal_2").iziModal();
   $("#modal_3").iziModal();
   $("#modal_4").iziModal();
   $("#modal_5").iziModal();
   $("#modal_6").iziModal();
   //modal js end
});
