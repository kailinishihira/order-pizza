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

function reset() {
$("#pizza-size").val("");
$("#toppings").val("");
$("#new-name").val("");
$("#new-email").val("");
$("#new-phone").val("");
}

// var allToppingsPrices = [];
// Pizza.prototype.toppingsPrice = function() {
//   for (var i = 0; i < this.toppings.length; i++) {
//       this.toppings[i] = 1
//       allToppingsPrices.push(this.toppings[i]);
//     }
//   }
// var newPizza;

//UI logic:
$(document).ready(function() {
  $("#more-toppings").click(function() {
    $("#add-toppings").append('<h2>Additional Free Toppings:</h2>' +
                                '<div class="add-toppings">' +
                                  '<select class="form-control" id="toppings">' +
                                    '<option value="Pepperoni">Pepperoni</option>' +
                                    '<option value="Mushrooms">Mushrooms</option>' +
                                    '<option value="Bacon">Bacon</option>' +
                                    '<option value="Pineapple">Pineapple</option>' +
                                    '<option value="Ham">Ham</option>' +
                                    '<option value="Garlic">Garlic</option>' +
                                    '<option value="Onions">Onion</option>' +
                                    '<option value="Basil">Basil</option>' +
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
    reset();
  });
});
