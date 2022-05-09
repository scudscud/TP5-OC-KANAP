// const titleprod = document.getElementById("title");
// let priceprod = document.getElementById("price");
// const descriptionprod = document.getElementById("description");
// let choicecolor = document.getElementById("colors[i]");

//* insertion des détails de la description produit sur la page produit *\\
//* variable de récupération de l'ID produit *\\
const IdProduct = window.location.search.split("?id=").join("");
let itemImg = document.querySelector(".item__img");
let product = [];

//*  requete pour obtenir les détails de la descritpion produit *\\

const getproductdetail = async () => {
  await fetch(`http://localhost:3000/api/products/${IdProduct}`)
    .then((res) => res.json())
    .then((data) => (product = data));
};

//* insertion des résultats de la requête dans la page *\\
const productdetail = async () => {
  await getproductdetail();

  document.title = `${product.name}`;
  itemImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
  title.textContent = `${product.name}`;
  price.textContent = `${product.price}`;
  description.textContent = `${product.description}`;
  //** affichage du choix des couleurs **//
  product.colors.forEach((n, i) => {
    colors.innerHTML += `<option value=${product.colors[i]}>${product.colors[i]}</option>`;
  });
};

// //* ecoute de la quantité **\\
// quantity.addEventListener('input',(e) => {
//  console.log(e.target.value);

// })
//** paramètres des animations **\\

//** animation couleur erreur ajout au panier **\\
const animColorError = () => {
  colors.style.borderColor = "red";
  setTimeout(() => {
    colors.style.borderColor = "inherit";
  }, 800);
  colors.animate([{ transform: `translateX(1%)` }], {
    duration: 200,
    iterations: 4,
  });
};
//** animation quantité erreur ajout au panier **\\
const animQuantityError = () => {
  document.querySelector(".item__content__settings__quantity").innerHTML = ` <label for="itemQuantity">Choisir un nombre d'article(s) entre 1  et 100:</label>
  <input type="text" name="itemQuantity"  value="choisissez une quantité" id="quantity" >`;
  setTimeout(() => {
    document.querySelector(".item__content__settings__quantity").innerHTML= `<label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
    <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity" >`;
  }, 1000);
  quantity.style.borderColor = "red";
  setTimeout(() => {
    quantity.style.borderColor = "inherit";
  }, 800);
  quantity.animate([{ transform: `translate(4%)` }], {
    duration: 200,
    iterations: 4,
  });
};
//** animation bouton erreur ajout au panier **\\
const animBouttonErreur = () => {
  addToCart.style.background = "#cc2900";
  setTimeout(() => {
    addToCart.style.background = "";
  }, 800);
  addToCart.animate(
    [{ transform: `translateX(2%)` }, { transform: `translatey(2%)` }],
    { duration: 200, iterations: 4 }
  );
};
//* animation bouton parametre ok **\\
const animBouttonAgree = () => {
  addToCart.style.background = "#00cc66";
  setTimeout(() => {
    addToCart.style.background = "";
  }, 800);
};

//* ajout au panier si caractéristiques sont bonnes addtobasket *\\

let addToBasket = () => {
  document.getElementById("addToCart").addEventListener("click", () => {
    if (
      colors.value === "" &&
      (quantity.value < parseInt(quantity.min) ||
        quantity.value > parseInt(quantity.max))
    ) {
      animColorError();
      animQuantityError();
      animBouttonErreur();
      // alert("veuillez renseigner une couleur et une quantitée") //
    } else {
      if (colors.value === "") {
        animColorError();
        animBouttonErreur();
        // alert("veuillez renseigner une couleur")
      } else if (
        quantity.value > parseInt(quantity.max) ||
        quantity.value < parseInt(quantity.min)
      ) {
        animQuantityError();
        animBouttonErreur();
        // alert("veuillez renseigner une quantitée entre 1 et 100")
      } else {
        animBouttonAgree();
        // alert("veuillez renseigner une quantitée entre 1 et 100")
        const order = {id: IdProduct, quantity: quantity.value,color: colors.value,price: product.price};
        
        //** enregistrement du panier dans local storage **\\
        const saveCart= (cart) => {
        
          localStorage.setItem("order", JSON.stringify(cart))
        }

        const getCart = () => {
          
          let cart = localStorage.getItem("order");
          if (cart == null) {
            return []
            // saveCart(order)
            
          } else { 
            return JSON.parse(cart)
          }
          
        }

        const addCart = (cart) => { 
         
         let basket = getCart()
         console.log(order.color);
         console.log(cart.color);
         console.log(basket);
         console.log(basket.color);
         console.log(basket.id);
         console.log(basket.quantity);
         
         
         let findbasket = basket.find( basket => basket.id == cart.id &&  basket.color === cart.color)
         console.log(findbasket);
         if(findbasket != undefined){ findbasket.quantity = order.quantity}

         else{basket.push(cart)}
          
          saveCart(basket)

        }
        addCart(order)
        getCart()
       
      }
      }         
  })
}

        
getproductdetail();
productdetail();
addToBasket();
