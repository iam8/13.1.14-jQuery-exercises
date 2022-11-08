// Ioana Alex Mititean
// 11/7/22
// 13.1.14: jQuery Exercises, PART TWO

/* Event handler for submitting the movie rating form. */
$("#rating-form").on("submit", function (event) {
    event.preventDefault();

    const title = $("#movie-title").val();
    const rating = $("#movie-rating").val();

    // Add movie rating info to list in DOM
    $("#movie-list").append(`<li>Title: ${title}; Rating: ${rating}</li>`);

    $("#movie-title").val("");
    $("#movie-rating").val("");
})

/* Event handler for clicking the 'clear list' button for the movie list. */
$("#clear-list").on("click", function () {
    $("#movie-list").children().remove();
})