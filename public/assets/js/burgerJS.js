$(function(){
    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devour: newDevour
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT"
        })

    })//.change-devour



    $(".create-form").on("click", function(event){
      //so the form doesnt reset for no reason
      event.preventDefault();

      var newBurger = {
        name: $("#burg").val().trim(),
        devoured: false 
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function(){
        console.log("created BURGER");
        location.reload();
      }) 

    })// end of .create-form
  }) // end of oriignal function