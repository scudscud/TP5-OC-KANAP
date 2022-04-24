// //* recuperer une information précise
// function getproductdetail() {
//   fetch("http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926")
//     .then(function (res) {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then(function (detail) {
//         console.log(detail);
//     })
// }
// const details = getproductdetail()

//*insertion des produits sur la page index
const adItemIndex = document.getElementById("items");

const getproduct = () => {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (products) {
      
      products.forEach((i) => {
        adItemIndex.innerHTML += `<a href="./product.html?id=${i._id}">
<article><img src=${i.imageUrl} alt=${i.altTxt}>
  <h3 class="productName">${i.name}</h3>
  <p class="productDescription">${i.description}</p>
</article>
</a> `
        console.log();
      
    })
  
  })
}

getproduct();












 
    