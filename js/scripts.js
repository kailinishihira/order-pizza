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
});
