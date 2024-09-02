window.addEventListener("DOMContentLoaded", init);

const productURI = "https://kea-alt-del.dk/t7/api/products?limit=10";

let productList;
let productTemplate;

function init() {
  productList = document.querySelector("main");
  console.log("productList", productList);

  productTemplate = document.querySelector("#smallProductTemplate").content;
  console.log("#smallProductTemplate", productTemplate);

  fetch(productURI)
    .then((response) => {
      //console.log("response", response);
      return response.json();
    })

    .then(logJSON);
}

function logJSON(json) {
  json.forEach(showProducts);
}

function showProducts(product) {
  const clone = productTemplate.cloneNode(true);
  clone.querySelector("h3").textContent = product.productdisplayname;
  console.log(clone.querySelector(".price"));
  clone.querySelector(".subtle").textContent = product.brandname;
  clone.querySelector(".price").textContent = product.price;
  clone.querySelector(".discounted").textContent = product.onSale;
  clone.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  clone.querySelector("img").alt = product.productdisplayname;
  clone.querySelector("a").href = `product.html?id=${product.id}`;
  productList.appendChild(clone);
}
