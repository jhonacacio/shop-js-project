// getelement
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`No existe tal elemento: ${selection}, por favor, compruebe`);
};

// establecer elemento en localstorage
function setLocalStorage(key, value) {
  const theValue = JSON.stringify(value);
  window.localStorage.setItem(key, theValue);
}

// obtener elemento de local storage

function getLocalStorage(key) {
  const element = JSON.parse(window.localStorage.getItem(key));
  if (element) {
    return element;
  } else return [];
}

