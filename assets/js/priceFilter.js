// seleccionar items
const productsFilter = getElement(".product-content");

function priceFilter(data) {
  displayPriceFilter(data);
  const priceInput = getElement('[type="range"]');
  window.addEventListener("input", function (e) {
    const price = parseFloat(priceInput.value);
    const filtredData = data.filter((item) => {
      return parseFloat(item.price) <= price;
    });
    const currentValue = getElement(".value");
    currentValue.textContent = `${formatPrice(price)}`;
    displayProducts(filtredData, productsFilter);
  });
}

function displayPriceFilter(data) {
  const prices = data.map((item) => {
    return item.price;
  });
  const maxPrice = Math.ceil(Math.max(...prices));
  const minPrice = Math.floor(Math.min(...prices));
  const priceRange = getElement(".price-r");
  priceRange.innerHTML = ` <input
  type="range"
  name="price"
  id="price"
  max="${maxPrice}"
  min="${minPrice}"
  value="${maxPrice}"
  class="w-100"
/>
<span
  class="d-flex justify-content-between align-items-center"
>
  <span class="min text-muted">${formatPrice(minPrice)}</span>
  <span class="max text-muted">${formatPrice(maxPrice)}</span>
</span>
<span class="value text-muted">Valor: ${formatPrice(maxPrice)}</span>`;
}

function formatPrice(price) {
  const thePrice = Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(price.toFixed(2));
  return thePrice;
}