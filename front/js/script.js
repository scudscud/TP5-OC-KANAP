//*insertion des produits sur la page index
const adItemIndex = document.getElementById("items");

const product = () => {
  fetch("http://localhost:3000/api/products")
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
    })

    .then((products) => { 
      products.forEach((product) => {
        adItemIndex.innerHTML += `<a href="./product.html?id=${product._id}">
<article><img src=${product.imageUrl} alt=${product.altTxt}>
  <h3 class="productName">${product.name}</h3>
  <p class="productDescription">${product.description}</p>
</article>
</a> `
       
      console.log(product);
    });
  
  });
};

product();












 
    