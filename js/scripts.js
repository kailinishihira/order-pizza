// //Business logic:
function Pizza (size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.basePrice = function() {
  if (this.size === "Small") {
    return 12;
  } if (this.size === "Medium") {
    return 18;
  } if (this.size === "Large") {
    return 25;
  }
}

// Pizza.prototype.toppingsPrice = function() {
//   if (this.toppings === "Pepperoni") {
//     return 1;
//   }
// }
// var allToppingsPrices = [];
// Pizza.prototype.toppingsPrice = function() {
//   for (var i = 0; i < this.toppings.length; i++) {
//       this.toppings[i] = 1
//       allToppingsPrices.push(this.toppings[i]);
//     }
//   }
//
// var totalToppingsPrice;
// allToppingsPrices.forEach(function(allToppingPrice) {
//   totalToppingsPrice += allToppingPrice;
// });

// var newPizza;

//UI logic:
$(document).ready(function() {
  $("#more-toppings").click(function() {
    $("#add-toppings").append('<h3>Additional Toppings:</h3>' +
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
    var newPizza = new Pizza(inputPizzaSize);

    $(".add-toppings").each(function() {
      var inputToppings = $(this).children("#toppings").val();
      newPizza.toppings.push(inputToppings);

    var userName = $("#new-name").val();

    $("#order-details").show();
    $(".user-name").text(userName);
    $(".size-ordered").text(newPizza.size);
    $(".toppings-ordered").text(newPizza.toppings.toString());
    $(".order-total").text(newPizza.basePrice());


    });
    $("#pizza-size").val("");
    $("#toppings").val("");
    $("#new-name").val("");
    $("#new-email").val("");
    $("#new-phone").val("");
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
