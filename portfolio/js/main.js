console.log("we're in the main.js");

$(document).click(function(event) {
    var item = $(event.target)
    console.log(item)
});