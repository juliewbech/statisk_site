const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then((product) => {
      console.log(product.id);
      document.querySelector(".purchaseBox h3").textContent =
        product.productdisplayname;
      document.querySelector(
        "img"
      ).src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
      document.querySelector("img").alt = product.productdisplayname;
      document.querySelector(".season").textContent = product.season;
      document.querySelector(".type").textContent = product.usagetype;
      document.querySelector(".number").textContent = product.id;
      document.querySelector(".brand").textContent = product.brandname;
    });
}
getProduct();
