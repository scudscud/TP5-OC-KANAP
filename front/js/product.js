// const titleprod = document.getElementById("title");
// let priceprod = document.getElementById("price");
// const descriptionprod = document.getElementById("description");
// let choicecolor = document.getElementById("colors[i]");

//* insertion des détails de la description produit sur la page produit *\\
//* variable de récupération de l'ID produit *\\
let IdProduct = window.location.search.split("?id=").join("");
let itemImg = document.querySelector(".item__img");
let product = [];
//*  requete pour obtenir les détails de la descritpion produit *\\

const getproductdetail = async () => {
   await  fetch(`http://localhost:3000/api/products/${IdProduct}`)
    .then( (res) => res.json())
    .then ((data) => { product = (data)}); 
  }

const productdetail = async () => {
await  getproductdetail();
      document.title = `${product.name}`
      itemImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
      title.textContent = `${product.name}`;
      price.textContent = `${product.price}`;
      description.textContent = `${product.description}`;
      //** affichage du choix des couleurs **//
      product.colors.forEach((n, i) => {
        colors.innerHTML += `<option value=${product.colors[i]}>${product.colors[i]}</option>`;
      })   
  };
// console.log(`${product.price}`);

// //* ecoute de la quantité **\\
// quantity.addEventListener('input',(e) => {
//  console.log(e.target.value);

// })   

//* addtobasket *\\
let addToBasket = () => {

  document.getElementById('addToCart').addEventListener('click', () => {
   const cart = Object.assign({},{
    quantityProduct : quantity.value, 
    
    colorProduct : colors.value,
    
    idBasket : IdProduct,
    }
    
    )
    console.log(cart);
})

}













getproductdetail();
productdetail();
addToBasket();
//********** même resultat boucle for  ************//
// for ( let i = 0; i < detail.colors.length; i++ ) {
//    colors.innerHTML += `<option value="${detail.colors[i]}">${detail.colors[i]}</option>
//     `
//     console.log(detail.colors[i]);
// }
// product.colors.forEach((n, i) =>