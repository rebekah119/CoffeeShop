const productsHeading = document.querySelector(".heading1");
const productFet = document.querySelector(".productsFeatures");
productFet.classList.add("categoriesFeatures");

const searchQuery = window.location.search;
const queryParam = new URLSearchParams(searchQuery);
const queryId = parseInt(queryParam.get("cat-id"),10);
const queryName = queryParam.get("cat-name");
console.log(queryId);

productsHeading.innerText = queryName;