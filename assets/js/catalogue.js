
// select item
const url = "cars.json";
const productsCars = getElement(".product-content");
// select item
const features = getElement(".features-content");

window.addEventListener("DOMContentLoaded", async function () {
  const data = await getData(url).finally(() => {
    const loader = getElement(".features-loader");
    const loaderProducts = getElement(".products-loader");
    loader.classList.add("hide");
    loaderProducts.classList.add("hide");
  });
  setLocalStorage("store", data);
  const myData = data.filter((item) => {
    return item.id < 5;
  });
  displayProducts(myData, features);
  displayProducts(data, productsCars);
  searchFilter(data);
  categoriesFilter(data);
  priceFilter(data);
  CartUnit();
});


const btn = document.getElementById('checkout');
btn.addEventListener('click',() =>{
  Toastify({
    text: "Gracias por tu compra",
    duration: 3000,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
} )

