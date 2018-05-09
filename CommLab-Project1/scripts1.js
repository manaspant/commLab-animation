document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        $(".nav").fadeIn();
    }
});


$("#form_Submit").click(function(){
	console.log("tower was pressed");
	$("#main-Form").hide();
	$("#form_Submit").hide();
	$("#formInfo").fadeIn();
	console.log("pressed again");

});