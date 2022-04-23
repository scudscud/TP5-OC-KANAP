//* Recuperer les informations du produit 
function getproduct() {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (products) {
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        console.log(element.colors[1]);
      }
    });
}

getproduct();

//* recuperer une information précise 
function getproductdetail() {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (products) {
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        console.log(products[0].colors[1]);
      }
    });
}

getproductdetail()