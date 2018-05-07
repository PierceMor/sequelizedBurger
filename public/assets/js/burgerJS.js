$(function(){

  $(".change-devoured").on("click",function(){
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevoured");

      var newDevourState = {
        devoured: newDevour
      };
      
      // send the PUT REQUEST 
      $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: newDevourState
        } ).then(
          function() {
            console.log("changed devour state", newDevour);
            location.reload();
          }
        );
  });///change-devoured

  $(".create-form").on("click",function (event){
    event.preventDefault();

    var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };

    // send the fucking post request
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          location.reload();
        }
      );
  }); // create form

  $(".delete-burger").on("click", function(){
      var id = $(this).data("id");

      $.ajax("/api/burger/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted BURGER", id);
          location.reload();
        }
      );
  }); // delete-burgers
}); // beginning

console.log(error);