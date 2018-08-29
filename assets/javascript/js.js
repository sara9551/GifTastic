$(document).ready(function () {

    var topics = ["ice-cream", "sushi", "hamburguer", "eggs", "yogurt", "cereal", "pasta", "cake", "banana", "apple", "burrito"];

    function displayAnimalGiphys() {

        var giphy = $(this).attr("data-food"); //-->>>>remember to use data-food
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "U99VkwNS5zjeLiCzbwmkdXP2bdjBMNY4";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(queryURL);
            console.log(response);

            function renderButtons() {

                $("#buttons-view").empty();

                for (var i = 0; i < food.length; i++) {
                    var a = $("<button>");

                    a.addClass("food-btn");

                    a.attr("data-food", food[i]);

                    a.text(food[i]);

                    $("#buttons-view").append(a);
                }
            }

            $("#add-food").on("click", function(event) {
                event.preventDefault();

                var food = $("#food-input").val().trim();
        
                topics.push(food);

                console.log(food);


            renderButtons();
        });

        $(document).on("click", ".giphy-btn", displaytopics);

        renderButtons();