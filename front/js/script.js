
//*insertion des produits sur la page index methode async + forEach *\\

const getproduct = async ()  => {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    
   
        .then((products) => {
      products.forEach((product) => {
        items.innerHTML += `<a href="./product.html?id=${product._id}">
<article><img src=${product.imageUrl} alt=${product.altTxt}>
  <h3 class="productName">${product.name}</h3>
  <p class="productDescription">${product.description}</p>
</article>
</a> `;
        console.log(product);
      })
    })
  };
 
 
  getproduct();
 
//****************************************************************************************//

//** insertion des produits sur la page methode function "callback" + for **\\
const adItemIndex = document.getElementById("items");

