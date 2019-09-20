console.log("am i working?");

// Establish Variables





// Establish Functions

// Render Initial Buttons
function renderButtons() {
	var movies = ["Star Wars", "Indiana Jones", "E.T.", "Jurassic Park"];
	$("#gif-container").empty();
	for (var i = 0; i < movies.length; i++) {
		var makeButton = $("<button>");
		makeButton.text(movies[i]);
		makeButton.addClass("gifButtonbtn btn-primary");
		console.log(makeButton);
		makeButton.click(movieClick);
		$("#gif-container").append(makeButton);
	}
}

// Note: Another way of writing for-loops: for(var movie of movies){} //


$("#button-addon1").click(clickPopulate)

// Render buttons based on user input
function clickPopulate(event) {
	console.log(event);
	var something = $("#input-id").val();
	var makeButton2 = $("<button>");
	makeButton2.text(something);
	makeButton2.addClass(".gifButtonbtn btn-primary");
	console.log(something);
	$("#gif-container").append(makeButton2);
	makeButton2.click(movieClick);
}

// When the user clicks on button, initiate search for GIFS
// Include function to get AJAX info and then from that use URL to populate intended search

function movieClick(event) {
	console.log(event.target);
	console.log(event.target.innerText);
}


function displayGifSearch() {}
	//javascript, jQuery



// Eventually I know that I need to seperate the url to url(part 1) + user input/search + url(part 2) but I am struggling to know where/how to do it.

// Could not figure out how to get this to work...

	// var queryURL = $.get("http://api.giphy.com/v1/gifs/random/search?q=cheeseburgers&api_key=gUBChyDrLEEtNd1hUOGvN5FcGGenEayR&tag=movies&rating=G&limit=5");


	// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=gUBChyDrLEEtNd1hUOGvN5FcGGenEayR&limit=5");
	// xhr.done(function (data) { console.log("success got data", data); });






// Example stuff from the Cat Button Activity:

 // Event listener for our cat-button
//  $("#star-wars").on("click", function() {

// // 	// Storing our giphy API URL for a random cat image
// 	var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

// // 	// Performing an AJAX GET request to our queryURL
// 	$.ajax({
// 	  url: queryURL,
// 	  method: "GET"
// 	})

// // 	  // After the data from the AJAX request comes back
// 	  .then(function(response) {

// // 		// Saving the image_original_url property
// 		var imageUrl = response.data.image_original_url;

// // 		// Creating and storing an image tag
// 		var catImage = $("<img>");

// // 		// Setting the catImage src attribute to imageUrl
// 		catImage.attr("src", imageUrl);
// 		catImage.attr("alt", "cat image");

// // 		// Prepending the catImage to the images div
// 		$("#gif-container2").prepend(catImage);
// 	  })
// 	}
// // 	  });
// //   });





// 	// $.ajax({
// 	// 	url: queryURL,
// 	// 	method: "GET"
// 	// })

// 	// 	// After the data from the AJAX request comes back
// 	// 	.then(function (response) {

// 	// 		// Saving the image_original_url property
// 	// 		var imageUrl = response.data.image_original_url;

// 	// 		// Creating and storing an image tag
// 	// 		var moviesImage = $("<img>");

// 	// 		// Setting the catImage src attribute to imageUrl
// 	// 		moviesImage.attr("src", imageUrl);
// 	// 		moviesImage.attr("alt", "movie image");

// 	// 		// Prepending the catImage to the images div
// 	// 		$("#gif-container").prepend(moviesImage);
// 	// 	});
//  )}

	// displayGifSearch();

// Call Functions
renderButtons();