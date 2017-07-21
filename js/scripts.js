//Business logic:
function Pizza (size, toppings, additionalToppings) {
  this.size = size;
  this.toppings = [];
}

// Pizza.prototype.cost = function() {
//   return this.size + this.toppings;
// }


//UI logic:
$(document).ready(function() {
  $("#more-toppings").click(function() {
    $("#add-toppings").append('<div class="add-toppings">' +
                                '<div class="radio">' +
                                  '<label>' +
                                    '<input type="radio" name="toppings" value="pepperoni">Pepperoni' +
                                  '</label>' +
                                '</div>' +
                                '<div class="radio">' +
                                  '<label>' +
                                    '<input type="radio" name="toppings" value="mushrooms">Mushrooms' +
                                  '</label>' +
                                '</div>' +
                                '<div class="radio">' +
                                  '<label>' +
                                    '<input type="radio" name="toppings" value="bacon">Bacon'+
                                  '</label>' +
                                '</div>' +
                                '<div class="radio">' +
                                  '<label>' +
                                    '<input type="radio" name="toppings" value="anchovies">Anchovies' +
                                  '</label>' +
                                '</div>' +
                                '<div class="radio">' +
                                  '<label>' +
                                    '<input type="radio" name="toppings" value="extra-cheese">Extra-cheese' +
                                  '</label>' +
                                '</div>' +
                              '</div>');
  });

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var inputPizzaSize = $("input:radio[name=pizza-size]:checked").val();
    // $(".add-toppings").each(function() {
    var inputPizzaToppings = $(this).find("input:radio[name=toppings]:checked").val();
    var newPizza = new Pizza(inputPizzaSize, inputPizzaToppings);
    newPizza.toppings.push(inputPizzaToppings);
    });




  });

});
