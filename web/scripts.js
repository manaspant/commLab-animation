
	/*************************/
	//Initialize some variables
	/*************************/

	//Set the video link
	//Replace '&controls=0' to hide youtube player controls
	var theVideoLink = "https://www.youtube.com/watch?v=NWNPjGKdkWs&feature=youtu.be";
	var vidIsPlaying = false;
	var currentTime = 0;
	var id, id2, id3, uChoice1, uChoice2;
	var nextT, nextT2, nextT3, nextT4;
	var search1 = false; search2 = false; search3 = false; final_bool = false;

	//Set the page element
	var theElement = "#video";

	//Create the Popcorn video object
	var myVideo = Popcorn.smart(theElement, theVideoLink);
	var volume = myVideo.volume();
	$(".q1").hide();
	$("#final-text").hide();
	/*******************/
	//Trigger some events
	/*******************/


	// "ON" EVENTS
	myVideo.on("play", function(){
		$("#play").html("<i class='fas fa-pause'></i>");
		$(".control").css({"color":"#000", "background":"#fff"});
		vidIsPlaying = true;
	});
	myVideo.on("pause", function(){
		$(".control").css({"color":"#fff", "background":"#000"});
		$("#play").html("<i class='fas fa-play'></i>");
		vidIsPlaying = false;
	});

	myVideo.on("timeupdate", function(){
		currentTime = myVideo.currentTime();

		if (search1 == true && search2 == true && search3 == true && final_bool == false) {
			final_bool = true;

		console.log("inside final act");
		$("#final-text").show();
	}


		if(currentTime >=54 && currentTime <=56){
			if (search1 == false) {
				search1 = true;


			console.log("HEREE");
			$(".video-controls").hide();
			myVideo.pause();
			$(".q1").show();
			$('button').click(function() {
				$("#hide").show();
				$("#hide").hide();
			    id = $(this).attr('id');
			    console.log("ID is", id);
			    uChoice1 = id;

				if (id== "choice1") {
					$("button").hide();
					console.log("making progress");
					nextT = 88;
					nextT2 = 90;
					myVideo.on("canplayall", function() {

			  	// set a cue at the 5second mark
				  this.cue(89, function() {
				    // pause at seconds
				    this.pause();
				  });

				  // Start playing from seconds
				  this.play(70);
				});
			}
				if (id== "choice2") {
					$("button").hide();
					console.log("making progress");
					nextT = 104;
					nextT2 = 106;
					myVideo.on("canplayall", function() {

				  // set a cue at the 5second mark
				  this.cue(104, function() {
				    // pause at seconds
				    this.pause();
				  });

				  // Start playing from seconds
				  this.play(90);
				});
			}
				if (id== "choice3") {
					$("button").hide();
					console.log("making progress");
					nextT = 68;
					nextT2 = 70;
					myVideo.on("canplayall", function() {

				  // set a cue at the 5second mark
				  this.cue(69, function() {
				    // pause at seconds
				    this.pause();
				  });

				  // Start playing from seconds
				  this.play(55);
				});
			}
			});

			}

		}
		if (currentTime >= nextT && currentTime <= nextT2){
			if (search2 == false) {
				search2 = true;

			$("button").show();
			$("#hide").show();
			$("#" + uChoice1).hide();

			$('button').click(function() {
				$("#hide").hide();
				console.log("bc");
			    id2 = $(this).attr('id');
			    uChoice2 = id2;
			    console.log("This is id",id2);
			    // return false; 

				if (id2== "choice1") {
					$("button").hide();
					console.log("making progress");
					myVideo.on("canplayall", function() {
						nextT3 = 88;
						nextT4 = 89;

				  // set a cue at the 5second mark
				  this.cue(89, function() {
				    // pause at seconds
				    this.pause();
				  });

				  // Start playing from seconds
				  this.play(70);
				});
			}
				if (id2== "choice2") {
					$("button").hide();
					console.log("making progress");
					myVideo.on("canplayall", function() {
						nextT3 = 104;
						nextT4 = 106;

				  // set a cue at the 5second mark
				  this.cue(104, function() {
				    // pause at seconds
				    this.pause();
				  });

				  // Start playing from seconds
				  this.play(90);
				});
			}
				if (id2== "choice3") {
					$("button").hide();
					console.log("making progress");
					myVideo.on("canplayall", function() {
						nextT3 = 104;
						nextT4 = 106;

				  // set a cue at the 5second mark
				  this.cue(69, function() {
				    // pause at seconds
				    this.pause();
				  });

				  // Start playing from seconds
				  this.play(55);
				});
			}

				else if (id2 == uChoice1) {
					console.log("Already checked there!!!");
				}
			});

			}
			
		}


		if (currentTime >= nextT3 && currentTime <= nextT4){
			if (search3 == false) {

			console.log("3rd stage");
			$("#hide").show();
			$("button").show();
			$("#" + uChoice2).hide();
			$("#" + uChoice1).hide();

			$('button').click(function() {
				$("#hide").hide();
				console.log("bc");
			    id3 = $(this).attr('id');
			    uChoice2 = id3;
			    console.log("This is id",id3);
			    // return false; 

				if (id3== "choice1") {
					$("button").hide();
					console.log("making progress");
					myVideo.on("canplayall", function() {

				  // set a cue at the 5second mark
				  this.cue(89, function() {
				    // pause at seconds
				    this.pause();
				    console.log("final pause");
				   
				  });

				  // Start playing from seconds
				  this.play(70);
				});
			}
				if (id3== "choice2") {
					$("button").hide();
					console.log("making progress");
					myVideo.on("canplayall", function() {

				  // set a cue at the 5second mark
				  this.cue(104, function() {
				    // pause at seconds
				    this.pause();
				    console.log("final pause");
				    $("#final-text").show();
				  });

				  // Start playing from seconds
				  this.play(90);
				});
			}
				if (id3== "choice3") {
					$("button").hide();
					$(".q1").hide();
					console.log("making progress");
					myVideo.on("canplayall", function() {

				  // set a cue at the 5second mark
				  this.cue(70, function() {
				    // pause at seconds
				    this.pause();
				    console.log("final pause");
				    $("#final-text").show();
				  });

				  // Start playing from seconds
				  this.play(55);
				});
			}

				else if (id3 == uChoice2) {
					console.log("Already checked there!!!");
				}

			});
			}

			search3 = true;
			
		}

		myVideo.on("canplayall", function() {

		  // set a cue at the 5second mark
		this.cue(68, function() {
	    $("final-text").show();
	  	});

		// if (currentTime >= 69 && currentTime <= 71){

		// 	myVideo.on("canplayall", function() {

		// 		  // set a cue at the 5second mark
		// 		  this.cue(129, function() {
		// 		    // pause at seconds
		// 		  this.pause();
		// 		  });

		// 		  // Start playing from seconds
		// 		  this.play(104);
		// 		});



		// }

});

});

	$('#final-link').click(function(){
		console.log("HELLO FINAL BC");
		myVideo.play(105);

	});
	/*******************************/
	//Set some button event listeners
	/*******************************/

	$('#play').click(function(){
		//Trigger the video to play or pause
		if(vidIsPlaying){
			myVideo.pause();
		}else{
			myVideo.play();
		}
		vidIsPlaying = !vidIsPlaying;
	});


	$("#volume-up").click(function(){
		if(volume < 1){
			volume = volume + 0.1;
			myVideo.volume(volume);
			console.log("volume up");
		}
	});

	$("#volume-down").click(function(){
		if(volume > 0 ){
			volume = volume - 0.1;
			myVideo.volume(volume);
			console.log("volume down");
		}
	});

