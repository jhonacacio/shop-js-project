// seleccionar items
const products = getElement(".product-content");
const searchForm = getElement(".search-form");
const theValue = getElement('[type="search"]');

function searchFilter(data) {
  theValue.addEventListener("input", function () {
    const value = theValue.value;
    if (!value) {
      displayProducts(data, products);
    }
  });

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = theValue.value;
    if (value) {
      const filtredData = data.filter((item) => {
        return item.title.toLowerCase().startsWith(value.toLowerCase());
      });
      if (filtredData.length > 0) {
        displayProducts(filtredData, products);
      } else {
        const products = getElement(".product-content");
        products.innerHTML = `<p class='text-center h1 lead text-muted text-capitalize' >Lo sentimos, no hay ningún producto con ese nombre: ${value}</p>`;
      }
    }
  });
}