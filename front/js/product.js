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
        const order = [{id: IdProduct, quantity: quantity.value,color: colors.value,price: product.price}];

        //** enregistrement du panier dans local storage **\\
        function saveCart(cart) {
          localStorage.setItem("order", JSON.stringify(cart))
        }

        const getCart = () => {
          let cart = localStorage.getItem("order");
          if (cart === null) {
            // console.log(cart)
            return []
            
          } else { 
            return JSON.parse(cart)
          }
          
        };

        const addCart = (product) => {
          let cart = getCart();
          // console.log(cart[0][0].id)
          // console.log(order[0].quantity)
          // console.log(cart[0][0].quantity)
          // console.log(order[0].color)
          // console.log(cart[0][0].color)
          let addproduct = cart.find((i => cart[0][0].id == cart[0][0].quantity ) && (o => cart[0][0].color == order[0].color ))
          if(addproduct != undefined){
            
          
            cart[0][0].quantity = order[0].quantity
            
             }
          else {
            
             
            cart.push(order)
          }
          
          saveCart(cart)
        };
        addCart()
        getCart()
        
      }
    }
  });
};

getproductdetail();
productdetail();
addToBasket();
// ********** même resultat boucle for  ************//
// for ( let i = 0; i < detail.colors.length; i++ ) {
//    colors.innerHTML += `<option value="${detail.colors[i]}">${detail.colors[i]}</option>
//     `
//     console.log(detail.colors[i]);
// const order = Object.assign({},{idProductCart: IdProduct},{quantityProdcutCart: quantity.value},{colorProductCart: colors.value})
