$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("devour");
  
      var newEatenState = {
        eaten: newEaten
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed eaten to", newEaten);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });