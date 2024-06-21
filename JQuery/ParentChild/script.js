$(document).ready(function () {
    $(".container").on("click", "*", function (event) {
        event.stopPropagation(); 

        $(".container *").css({ "color": "", "border": "" });

        $(this).css({ "color": "black", "border": "2px solid black" });

        $(this).siblings().css({ "color": "red", "border": "2px solid red" });

        $(this).parents().css({ "color": "green", "border": "2px solid green" });

        $(this).children().css({ "color": "orange", "border": "2px solid orange" });
    });

});
