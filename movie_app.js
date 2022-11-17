// Ioana Alex Mititean
// 11/7/22
// 13.1.14: jQuery Exercises, PART TWO

/* Event handler for submitting the movie rating form. */
$("#rating-form").on("submit", function(event) {
    event.preventDefault();

    const title = $("#movie-title").val();
    const rating = $("#movie-rating").val();

    // Validate input title length
    if (title.length < 2) {
        alert("Movie titles must be at least 2 characters long.");
        return;
    }

    // Add movie rating info and delete button to list in DOM
    const $delBtn = $("<button class='del-button'>Delete</button>");
    const $newEntry = $("<li>",
                        {"data-title": title,
                         "data-rating": rating,
                         "text": `Title: ${title}; Rating: ${rating}`})
                        .append($delBtn);

    $("#movie-list").append($newEntry);
    $("#rating-form").trigger("reset");
})

/* Event handler for clicking the 'delete' button next to any list item. */
$("#movie-list").on("click", ".del-button", function() {
    $(this).parent().remove();
})

/* Event handler for clicking either of the 'sort' buttons. */
$(".sort").on("click", function() {
    const listItems = $("#movie-list").children();
    listItems.remove();

    let listArr = listItems.get();

    if ($(this).attr("id") === "title-sort") {
        listArr.sort(sortByTitle);
    }

    if ($(this).attr("id") === "rating-sort") {
        listArr.sort(sortByRating);
    }
    
    $("#movie-list").append($(listArr));
})

/* Event handler for clicking the 'clear list' button for the movie list. */
$("#clear-list").on("click", function() {
    $("#movie-list").children().remove();
})


// Helper functions -------------------------------------------------------------------------------

/** Helper function: sort an array of tags by their 'title' attribute (ascending). */
const sortByTitle = (tag1, tag2) => {
    const title1 = tag1.dataset["title"].toLowerCase();
    const title2 = tag2.dataset["title"].toLowerCase();

    if (title1 > title2) return 1;
    if (title1 < title2) return -1;
    return 0;
}

/** Helper function: sort an array of tags by their 'rating' attribute (descending). */
const sortByRating = (tag1, tag2) => {
    const rating1 = +tag1.dataset["rating"];
    const rating2 = +tag2.dataset["rating"];

    if (rating1 > rating2) return -1;
    if (rating1 < rating2) return 1;
    return 0;
}

// jQuery