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
    $("#add-toppings").append('<h3>Additional Toppings</h3>' +
                                '<div class="add-toppings">' +
                                  '<select class="form-control" id="toppings">' +
                                    '<option value="1">Pepperoni</option>' +
                                    '<option value="2">Mushrooms</option>' +
                                    '<option value="3">Bacon</option>' +
                                    '<option value="4">Anchovies</option>' +
                                    '<option value="5">Extra Cheese</option>' +
                                  '</select>');
  });

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var inputPizzaSize = $("#pizza-size").val();
    // $(".add-toppings").each(function() {
    var inputPizzaToppings = $(this).find("#toppings").val();
    var newPizza = new Pizza(inputPizzaSize, inputPizzaToppings);
    newPizza.toppings.push(inputPizzaToppings);
    // });

  });
});


// '<div class="add-toppings">' +
//   '<div class="radio">' +
//     '<label>' +
//       '<input type="radio" name="toppings" value="pepperoni">Pepperoni' +
//     '</label>' +
//   '</div>' +
//   '<div class="radio">' +
//     '<label>' +
//       '<input type="radio" name="toppings" value="mushrooms">Mushrooms' +
//     '</label>' +
//   '</div>' +
//   '<div class="radio">' +
//     '<label>' +
//       '<input type="radio" name="toppings" value="bacon">Bacon'+
//     '</label>' +
//   '</div>' +
//   '<div class="radio">' +
//     '<label>' +
//       '<input type="radio" name="toppings" value="anchovies">Anchovies' +
//     '</label>' +
//   '</div>' +
//   '<div class="radio">' +
//     '<label>' +
//       '<input type="radio" name="toppings" value="extra-cheese">Extra-cheese' +
//     '</label>' +
//   '</div>' +
// '</div>');
