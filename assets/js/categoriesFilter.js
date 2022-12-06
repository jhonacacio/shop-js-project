// seleccionar item
const productsCategories = getElement(".product-content");
function categoriesFilter(data) {
  // obtener categorias
  displayCategories(data);
  //   seleccionar categorias
  const categoriesBtn = displayCategories(data);
  // inicio de filtro de categoría

  categoriesBtn.forEach((it) => {
    it.addEventListener("click", function (e) {
      // obtener la categoría de cada boton
      const category = e.currentTarget.dataset.category;

      //   agregar clase activa a boton activo
      categoriesBtn.forEach((cat) => {
        cat.classList.add("active");
        if (cat !== e.currentTarget) {
          cat.classList.remove("active");
        }
      });
      //   filtrar datos con categoría
      const filtredData = data.filter((item) => {
        return item.category.startsWith(category);
      });
      //   mostrar datos filtrados
      displayProducts(filtredData, productsCategories);
      // añadir filtro de búsqueda
      searchFilter(filtredData);
      priceFilter(filtredData);
      // añadir filtro de precio
      if (category === "Todos") {
        displayProducts(data, productsCategories);
        searchFilter(filtredData);
        priceFilter(data);
      }
    });
  });
//
}

function displayCategories(data) {
  let category = data.map((item) => {
    return item.category;
  });
  category = Array.from(new Set(category));
  category = category.sort();
  category.unshift("Todos");

  const cat = getElement(".categories");
  cat.innerHTML = category
    .map((item, index) => {
      let active = "";
      if (index === 0) {
        active = "active";
      }
      return `<li class="list-group-item border-0 text-muted ${active} cate" data-category=${item}>
    ${capitalize(item)}
  </li>`;
    })
    .join("");
  return document.querySelectorAll(".cate");
}

function capitalize(myString) {
  let myArr = [...myString];
  myArr[0] = myArr[0].toUpperCase();
  return `${myArr[0]}${myString.slice(1)}`;
}
