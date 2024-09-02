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
      document.querySelector(".purchaseBox p").textContent =
        product.articletype;
      document.querySelector(".purchaseBox .brand").textContent =
        product.brandname;
      document.querySelector(".info").textContent = product.info;
      document.querySelector(
        "img"
      ).src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
      document.querySelector("img").alt =
        "Sahara Team India Fanwear Round Neck Jersey";
    });
}
getProduct();
