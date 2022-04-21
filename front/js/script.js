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
        console.log("price ", element.price);
      }
    });
}

getproduct();
