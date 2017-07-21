// //Business logic:
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
//
// var pizzaBasePrice;
//
Pizza.prototype.basePrice = function() {
  if (this.size === "Small") {
    return pizzaBasePrice = 10;
  } if (this.size === "Medium") {
    return pizzaBasePrice = 15;
  } if (this.size === "Large") {
    return pizzaBasePrice = 20;
  }
}
//
// var toppings = [];
// var totalToppingsPrice;
// Pizza.prototype.toppingsPrice = function() {
//   forEach(toppings) {
//     totalToppingsPrice += 1;
//   }
// }
//
// Pizza.prototype.totalPrice = function() {
//   return pizzaBasePrice + totalToppingsPrice;
// }
//
// var newPizza;

//UI logic:
$(document).ready(function() {
  $("#more-toppings").click(function() {
    $("#add-toppings").append('<h3>Additional Toppings</h3>' +
                                '<div class="add-toppings">' +
                                  '<select class="form-control" id="toppings">' +
                                    '<option value="Pepperoni">Pepperoni</option>' +
                                    '<option value="Mushrooms">Mushrooms</option>' +
                                    '<option value="Bacon">Bacon</option>' +
                                    '<option value="Anchovies">Anchovies</option>' +
                                    '<option value="Extra Cheese">Extra Cheese</option>' +
                                  '</select>');
  });

  $("form#pizza-order").submit(function(event) {
    debugger;
    event.preventDefault();
    var inputPizzaSize = $("#pizza-size").val();
    // $(".add-toppings").each(function() {
    var inputPizzaToppings = $("#toppings").val();
      // toppings.push(inputPizzaToppings);
    var newPizza = new Pizza(inputPizzaSize, inputPizzaToppings);
    $(".size-ordered").text(newPizza.size);
    $(".toppings-ordered").text(newPizza.toppings);
    $(".order-total").text(newPizza.basePrice());

    // newPizza.toppings.push(inputPizzaToppings);
  //   // });
  });
  //
  // $(".size-ordered").text(newPizza.size());
  //   newPizza.toppings.forEach(function() {
  //   $(".toppings-ordered").append("<li>" + newPizza.toppings + "</li>");
  // });
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
