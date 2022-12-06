const btn = document.getElementById('checkout');
btn.addEventListener('click',() =>{
  Toastify({
    text: "Gracias por tu compra",
    duration: 3000,
    className: "info",
    style: {
      background: "linear-gradient(to right, #1A33C3, #006195)",
    }
  }).showToast();
} )