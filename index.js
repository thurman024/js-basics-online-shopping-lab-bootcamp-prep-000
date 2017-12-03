var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random()*100)
 cart.push({[item]: itemPrice})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length ==1) {
    var itemName = Object.keys(cart[0])
    console.log(`In your cart, you have ${itemName} at $${cart[0][itemName]}.`)
  }
  else if (cart.length == 2) {
    var items = []
    for (let i=0;i<2;i++){
      items[i] = Object.keys(cart[i])[0]
    }
    console.log(`In your cart, you have ${items[0]} at $${cart[0][items[0]]} and ${items[1]} at $${cart[1][items[1]]}.`)
  }
  //debugger
  else if (cart.length > 2) {
    var items = []; var prices = []
    for (let i=0; i<cart.length; i++) {
      items[i] = Object.keys(cart[i])[0]
      prices[i] = cart[i][items[i]];
    }
    var cartString = "In your cart, you have "
    for (let k=0; k<cart.length - 1; k++) {
      cartString = cartString + items[k] + " at $" + prices[k] + ", "
    }
    console.log(`${cartString}and ${items[cart.length]} at $${prices[cart.length]}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
