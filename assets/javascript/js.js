$(document).ready(function () {

  var topics = ["ice-cream", "sushi", "hamburguer", "eggs", "cereal", "pasta", "cake"];

  function renderButtons() {

    $("#button").empty();

    for (var i = 0; i < topics.length; i++) {

      var a = $("<button>");

      a.addClass("foodImage");

      a.attr("data-food", topics[i]);

      a.text(topics[i]);

      $("#button").append(a);
    }

  };

  function displayFoodGiphy() {

    // $("button").on("click", function () {

    var food = $(this).data("person");
    console.log(food);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=U99VkwNS5zjeLiCzbwmkdXP2bdjBMNY4&limit=10"; // --> LIMIT TO 10 GIFS

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var giphyDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var foodImage = $("<img>");
          foodImage.attr("src", results[i].images.fixed_height.url);

          giphyDiv.prepend(p);
          giphyDiv.prepend(foodImage);

          $("#gifs-appear-here").prepend(giphyDiv);

        }
      });
  }
  // });

  $("#add-food").on("click", function (event) {
    event.preventDefault();

    var food = $("#food-input").val().trim();

    topics.push(food);
    console.log(topics);

    renderButtons();
  });

  $(document).on("click", ".get-giphy", displayFoodGiphy);

  renderButtons();

});