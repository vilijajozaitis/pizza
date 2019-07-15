$(document).ready(function(){
  $("form#ingredients").submit(function(event){
    event.preventDefault();
    $"#ingredient-responses").show();
    $("input:checkbox[name=pizza-ingredients]:checked").each(function(){
      var pizzaIngredients = $(this).val();
      $('#pizza-ingredients').append(pizzaIngredients + "<br>");
    });
    $('#pizza_ingredients').hide();
  });
});


//business logic
function User
