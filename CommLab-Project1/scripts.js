
var video = document.querySelector("video");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute("autoplay");
  video.pause();
}

document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        window.location.replace("main2.html");
    }
});

// $('#target-div').load('main.html #hello');

$("#cast1").click(function(){
	console.log("tower was pressed");
	$(".content").hide();
	$("#building-one").fadeIn();
	console.log("pressed again");

});

$("#cast2").click(function(){
	console.log("tower was pressed");
	$(".content").hide();
	$("#building-two").fadeIn();
	console.log("pressed again");

});

$("#cast3").click(function(){
	console.log("tower was pressed");
	$(".content").hide();
	$("#building-three").fadeIn();
	console.log("pressed again");

});