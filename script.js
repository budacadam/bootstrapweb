$(document).ready(function() {$('#loginModal').modal('show');
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});



function addToCart() {
  // get the price and quantity of the product
  const price = parseFloat(document.querySelector("#product3 .p-price:last-child span:last-child").textContent);
  const quantity = 1; // assuming quantity is always 1
  
  const totalPrice = quantity * price;
  
  console.log(`Price: ${price}, Quantity: ${quantity}, Total Price: ${totalPrice}`);
}




function addToCart(id) {
  console.log(id)
  console.log(price)
}

let product = {
  name: productName
  price: productPrice
  quantity: 1
}