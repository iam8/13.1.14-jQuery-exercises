// Ioana Alex Mititean
// 11/7/22
// 13.1.14: jQuery Exercises, PART TWO

// Attach a 'submit' event handler to rating form
$("#rating-form").on("submit", function (event) {
    event.preventDefault();

    const title = $("#movie-title").val();
    const rating = $("#movie-rating").val();

    // Add movie rating info to list in DOM
    $("#movie-list").append(`<li>Title: ${title}; Rating: ${rating}</li>`);

    $("#movie-title").val("");
    $("#movie-rating").val("");
})

