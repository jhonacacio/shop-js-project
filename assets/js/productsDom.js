function displayProducts(data, section) {
  const html = data
    .map((item) => {
      const { title, id, price,priceList, image,category,brand, logo,yearCar } = item;
      return `    <div class="col-12 col-md-6 col-lg-3">
      <div class="card features-card" data-id=${id}>
        <div class="card-body d-flex flex-column justify-content-between">
          <div class="card-img-top ">
            <img
              class="card-img-top img-fluid "
              src=${image}
              alt=${title}
            />
          </div>
          <div class="card-description">
          
            <div>
            <strong>${title}</strong><br>
            ${category}<br>
            Año: ${yearCar}
            
            </div>
            <div>
            <img
              class="card-img-logo "
              src=${logo}
              alt=${title}
            />
            </div>
            
          </div>
          <div class="justify-content-between prices">
            <span class="text-right"><strong>Precio</strong> ${formatPrice(priceList)}</span><br>
            <span class="text-left final-price"><strong>Valor final</strong> ${formatPrice(price)}</span>
          </div>
        </div>
        <button
              class="tt addBtn btn btn-primary"
              data-bs-placement="top"
              data-bs-toggle="offcanvas"
              data-bs-target="#cart"
              title="Add to cart"
              data-id=${id}
              ><i class="bi bi-cart-plus"   
              aria-controls="offcanvasRight">Comprar</i>
            </button>
      </div>
    </div>`;
    })
    .join("");
  section.innerHTML = html;
  const addBtns = document.querySelectorAll(".addBtn");
  addBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const id = e.currentTarget.dataset.id;
      e.preventDefault();
      console.log(e.currentTarget);
      if (id) {
        addToCart(id, 1);
      }
    });
  });
}
