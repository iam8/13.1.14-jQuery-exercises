// Ioana Alex Mititean
// 11/7/22
// 13.1.14: jQuery Exercises, PART TWO

/* Event handler for submitting the movie rating form. */
$("#rating-form").on("submit", function(event) {
    event.preventDefault();

    const title = $("#movie-title").val();
    const rating = $("#movie-rating").val();

    // Add movie rating info and delete button to list in DOM
    const $delBtn = $("<button class='del-button'>Delete</button>");
    const $newEntry = $(`<li>Title: ${title}; Rating: ${rating}</li>`).append($delBtn);
    $("#movie-list").append($newEntry);

    $("#movie-title").val("");
    $("#movie-rating").val("");
})

/* Event handler for clicking the 'delete' button next to any list item. */
$("#movie-list").on("click", ".del-button", function() {
    $(this).parent().remove();
})

/* Event handler for clicking the 'clear list' button for the movie list. */
$("#clear-list").on("click", function() {
    $("#movie-list").children().remove();
})
