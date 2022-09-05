let pizzaToppings = ["pepperoni", "sausage", "ham", "bacon"];
function greetCustomer () {
  console.log("Welcome to The Pizza Store, our toppings are ");
  for (storeToppings of pizzaToppings) {
    console.log(storeToppings);
  }
}
function getPizzaOrder (size, crust, ...toppings) {
  let order = [size, crust, ...toppings];
  // bonus challenge #10 below
  let difOrder = !order.includes('pepperoni', 'sausage', 'ham', 'bacon');
  if (difOrder) { 
    console.log(`One ${size} ${crust} crust cheese pizza, coming up!`);
  }
  else {
    console.log(`One ${size} ${crust} crust with ${toppings} coming up!`);
  }
  function preparePizza (order) {
  console.log("...Cooking pizza...")
  const pizza = 
  {
    size: size,
    crust: crust,
    toppings: toppings
  }
  function servePizza() {
  console.log(`Order up! Here's your ${Object.values(pizza)} pizza...Enjoy!`);   
}
    servePizza();
}
  preparePizza();
}
greetCustomer();
getPizzaOrder("large", "thin", "ham", "pepperoni", "bacon");
/* I could not get servePizza(); to recognize Object.values(); without wrapping it inside of the preparePizza(); function.
I'm sure I did something different along the way that forced this to be the case.
I tried all 3 bonus questions in a variety of different ways, but kept breaking my code in order to get it to work. I'm sure I'm missing something here.
*/
