/* eslint-disable prettier/prettier */
let pizzaToppings = ["pepperoni", "sausage", "ham", "bacon"];
function greetCustomer() {
  console.log("Welcome to The Pizza Store, our toppings are ");
  for (let storeToppings of pizzaToppings) {
    console.log(storeToppings);
  }
}
function getPizzaOrder(size, crust, ...toppings) {
    console.log(`One ${size} ${crust} crust with ${toppings} coming up!`);
    return [size, crust, toppings];
}
function preparePizza(order) {
    console.log("...Cooking pizza...");
    const pizza = {
      size: order[0],
      crust: order[1],
      toppings: order[2]
    };
    return pizza;
  }
function servePizza(pizzaObj) {
  console.log(`Order up! Here's your ${pizzaObj.size} ${pizzaObj.crust} crust pizza with ${pizzaObj.toppings}...Enjoy!`);
  return pizzaObj;
}
greetCustomer();
servePizza(preparePizza(getPizzaOrder("large", "thin", "ham", "pepperoni", "bacon")));
/* I could not get servePizza(); to recognize Object.values(); without wrapping it inside of the preparePizza(); function.
I'm sure I did something different along the way that forced this to be the case.
I tried all 3 bonus questions in a variety of different ways, but kept breaking my code in order to get it to work. I'm sure I'm missing something here.
Other than that, should be all good to go!
*/
