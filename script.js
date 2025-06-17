function orderNow() {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your order has been received.');
    this.reset();
});
