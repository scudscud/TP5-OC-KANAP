//* recuperer une information précise
// const itemImg = document.createElement("<img>");
const itemImg = document.getElementById("item__img");
const titleprod = document.getElementById("title");
const priceprod = document.getElementById("price");
const descriptionprod = document.getElementById("description");
function getproductdetail() {
  fetch("http://localhost:3000/api/products/{_id}")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (detail) {
        titleprod.innerHTML = `<h1 id="title">
        ${detail.name}
      </h1>`;
      priceprod.innerHTML = `${detail.price}`;
      descriptionprod.innerHTML = `${detail.description}`

      console.log(detail);
    });
}
const details = getproductdetail();


itemImg.innerHTML = `<img src="../images/logo.png" alt="Photographie d'un canapé">`;
