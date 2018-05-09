var towelChecker = false, bagChecker = false, drawerChecker = false;
var pocketChecker1 = false, pocketChecker2 = false, pocketChecker3 = false;
var count = 0, pocketCount = 0;
var panelCount = 1;

$(".next-text").click(function(){
	$(".Panel-2").show();
	$(".Panel-1").hide();
	$(".next-text").hide();
	scream.play();
});

$(".next-text2").click(function(){
	$(".Panel-3").show();
	$("#dynamic").text("Look for the passport by clicking on items where it might be located! Next panel will be revealed once you have searched all possible places")
	$(".Panel-2").hide();
	$(".next-text2").hide();
});

$(".next-text3").click(function(){
	$(".Panel-4").show();
	$("#dynamic").text("Look for the passport in the different pockets by clicking around the bag!Next panel will be revealed once you have searched all possible places")
	$(".Panel-3").hide();
	$(".next-text3").hide();
});

$(".next-text4").click(function(){
	$(".Panel-5").show();
	$("#dynamic").text("")
	$(".Panel-4").hide();
	$(".next-text4").hide();
	idea.play()
});

$(".next-text5").click(function(){
	$(".Panel-6").show();
	$(".Panel-5").hide();
	$(".next-text5").hide();
});

$("#interactive1").click(function(){
	if (towelChecker==true) {
		$("#dynamic").text("Already checked here!")
	}
	if (towelChecker == false) {
		count +=1, towelChecker = true ;
		console.log("towel was pressed");
		$("#dynamic").text("wrong place!")
		console.log(count)}
		if (count==3) {
			$(".next-text3").show();
		}

});

$("#interactive2").click(function(){
	if (bagChecker==true) {
		$("#dynamic").text("Checked the bag already bud!")
	}
	if (bagChecker == false) {
		count +=1, bagChecker = true ;
		console.log("bag was pressed");
		$("#dynamic").text("Not under the bag!! WHERE IS IT?!!!")
	}
	if (count==3) {
			$(".next-text3").show();
	}
});

$("#interactive3").click(function(){
	if (drawerChecker==true) {
		$("#dynamic").text("Checked here too!")
	}
	if (drawerChecker == false) {
		count +=1, drawerChecker = true ;
		console.log("drawer was pressed");
		$("#dynamic").text("I thought it would be in the drawer.. AHHH")
	}
	if (count==3) {
			$(".next-text3").show();
	}
});

$("#pocket1").click(function(){
	zip.play();
	if (pocketChecker1==true) {
		$("#dynamic").text("Checked here already!")
	}
	if (pocketChecker1 == false) {
		$("#dynamic").text("Not here!")
		pocketCount +=1, pocketChecker1 = true ;
		console.log(count)}
		if (pocketCount==3) {
			$(".next-text4").show();
	}
});

$("#pocket2").click(function(){
	zip.play();
	if (pocketChecker2==true) {
		$("#dynamic").text("Checked here already bud!")
	}
	if (pocketChecker2 == false) {
		$("#dynamic").text("Not here as well!")
		pocketCount +=1, pocketChecker2 = true ;
	if (pocketCount==3) {
			$(".next-text4").show();
	}}
});

$("#pocket3").click(function(){
	zip.play();
	if (pocketChecker3==true) {
		$("#dynamic").text("Checked here already. Where could it go?!")
	}
	if (pocketChecker3 == false) {
		$("#dynamic").text("Not here too!")
		pocketCount +=1, pocketChecker3 = true ;
	}
	if (pocketCount==3) {
			$(".next-text4").show();
	}
});

if (panelCount == 1){
	$(".right-button").show();
	$(".left-button").hide();
}
else if (panelCount == 6){
	$(".right-button").hide();
	$(".left-button").show();
}
else{
	$(".right-button").show();
	$(".left-button").show();
}

$(".right-button").click(function(){
	$(".Panel-" + panelCount).hide();
	panelCount += 1;
	$(".Panel-" + panelCount).show();
});
$(".left-button").click(function(){
	$(".Panel-" + panelCount).hide();
	panelCount -= 1;
	$(".Panel-" + panelCount).show();
});

var zip = new Howl({
  src: ['zip.wav'],
});

var scream = new Howl({
  src: ['scream.wav'],
});

var idea = new Howl({
  src: ['idea.mp3'],
});
