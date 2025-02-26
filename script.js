// Smooth scroll to Order section when clicking the "Order Now" button
function scrollToOrder() {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// Handle order submission
function handleOrder(event) {
    event.preventDefault();

    // Get form values
    const flavor = document.getElementById('flavor').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;

    // Calculate total price
    let price = 0;
    switch(flavor) {
        case 'vanilla': price = 9.99; break;
        case 'chocolate': price = 11.49; break;
        case 'strawberry': price = 6.29; break;
        case 'mint': price = 15.59; break;
    }
    const total = (price * quantity).toFixed(2);

    // Display order confirmation
    const orderDetails = `Thank you for your order, ${name}!<br>Flavor: ${flavor}<br>Quantity: ${quantity}<br>Total Price: R${total}`;
    document.getElementById('orderDetails').innerHTML = orderDetails;
    document.getElementById('orderConfirmation').classList.remove('hidden');

    // Clear the form
    document.getElementById('orderForm').reset();
}

function sidebarPop(){
    document.getElementById("sidebar").style.display="block";
    document.getElementById("back").style.display="block";
    document.getElementById("menu").style.display="none";
    document.getElementById("l1").style.visibility="hidden";
    document.getElementById("l2").style.visibility="hidden";
    document.getElementById("orderButton").style.visibility="hidden";
 }
  
                                              // sidebar disappears
 function sidebarOff(){
    document.getElementById("sidebar").style.display="none";
    document.getElementById("back").style.display="none";
    document.getElementById("menu").style.display="block";
    document.getElementById("l1").style.visibility="visible";
    document.getElementById("l2").style.visibility="visible";
    document.getElementById("orderButton").style.visibility="visible";
 }