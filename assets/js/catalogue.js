
// seleccionar item
const url = "cars.json";
const productsCars = getElement(".product-content");
const features = getElement(".features-content");

window.addEventListener("DOMContentLoaded", async function () {
  const data = await getData(url).finally(() => {
    const loader = getElement(".products-loader");
    loader.classList.add("hide");
  });
  setLocalStorage("store", data);

  displayProducts(data, productsCars);
  searchFilter(data);
  categoriesFilter(data);
  priceFilter(data);
  CartUnit();
});




