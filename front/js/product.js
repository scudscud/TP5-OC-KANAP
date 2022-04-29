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
    .then((res) => res.json())
    .then ((data) => { product = (data)}); 
  }

const productdetail = async () => {
await  getproductdetail();
      document.title = `${product.name}`
      itemImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
      title.textContent = `${product.name}`
      price.textContent = `${product.price}`
      description.textContent = `${product.description}`
      //** affichage du choix des couleurs **//
      product.colors.forEach((n,i,y) => {
        colors.innerHTML += `<option value=${product.colors[i]}>${product.colors[i]}</option>`
        console.log(colors[0]);
      })   
  };
// console.log(`${product.price}`);

// //* ecoute de la quantité **\\
// quantity.addEventListener('input',(e) => {
//  console.log(e.target.value);

// })   

//* addtobasket *\\
const durationcolor = 800;
let addToBasket = () => {

  document.getElementById('addToCart').addEventListener('click', () => {
   
    if((colors.value === '')&&(quantity.value < parseInt(quantity.min) || quantity.value > parseInt(quantity.max))){
      colors.style.borderColor = "red"; setTimeout(()=>{colors.style.borderColor = "inherit";},      `${durationcolor}`)
      colors.animate([{transform: `translateX(1%)`}],{duration: 200, iterations: 4})
      quantity.style.borderColor = "red"; setTimeout(()=>{quantity.style.borderColor = "inherit";},800)
      quantity.animate([ {transform: `translate(4%)`}],{duration: 200, iterations: 4})
      // addToCart.style.boxShadow = "#cc0099"; setTimeout(()=>{addToCart.style.boxShadow = "";},2000)
      addToCart.style.background = "#cc2900"; setTimeout(()=>{addToCart.style.background = "";},800)
      addToCart.animate([ {transform: `translateX(2%)`},{transform: `translatey(2%)`}],{duration: 200, iterations: 4})
      // alert("veuillez renseigner une couleur et une quantitée")
      
    }
    else{
      if(colors.value === ''){
        colors.style.borderColor = "red"; setTimeout(()=>{colors.style.borderColor = "inherit";},800)
      colors.animate([{transform: `translateX(1%)`}],{duration: 200, iterations: 4})
      addToCart.style.background = "#cc2900"; setTimeout(()=>{addToCart.style.background = "";},800);
      addToCart.animate([ {transform: `translateX(2%)`},{transform: `translatey(2%)`}],{duration: 200, iterations: 4})
          // alert("veuillez renseigner une couleur")
      }
      else if(quantity.value > parseInt(quantity.max) || quantity.value < parseInt(quantity.min) ){
        quantity.style.borderColor = "red"; setTimeout(()=>{quantity.style.borderColor = "inherit";},800)
        quantity.animate([ {transform: `translate(4%)`}],{duration: 200, iterations: 4})
        addToCart.style.background = "#cc2900"; setTimeout(()=>{addToCart.style.background = "";},800)
      addToCart.animate([ {transform: `translateX(2%)`},{transform: `translatey(2%)`}],{duration: 200, iterations: 4})
        // alert("veuillez renseigner une quantitée entre 1 et 100")
          
      }
      else{
        // alert("veuillez renseigner une quantitée entre 1 et 100")
        addToCart.style.background = "#00cc66"; setTimeout(()=>{addToCart.style.background = "";},800)
        
          const order = [IdProduct,quantity.value,colors.value]
         
    
         const saveCart = (cart) => {
              localStorage.setItem("order",JSON.stringify(cart));
     
          }

       const getCart = () => {
           let cart = localStorage.getItem("order");
           if (cart == null){
             return[];
           }else {
             return JSON.parse(cart)
            }         
          }

        const addCart = (product) => {
          let cart = getCart();
          cart.push(product);
          saveCart(cart);


          }
          addCart()
          getCart()
          saveCart(order)
         
      }
    }


})

};



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