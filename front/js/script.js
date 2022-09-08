
//*insertion des produits sur la page index methode async + forEach *\\

const getproduct = async ()  => {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
        .then((products) => {
      products.forEach((product) => {
        // lien html pour redirection sur la page unique du produit \\
        items.innerHTML += `<a href="./product.html?id=${product._id}"> 
          <article><img src=${product.imageUrl} alt=${product.altTxt}>
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
          </article>
          </a> `;
      })
    })
  };    

  
  getproduct();
 
//****************************************************************************************//

//** insertion des produits sur la page methode function "callback" + for **\\
// const adItemIndex = document.getElementById("items");

//===================end script ; next => product ==========================\\