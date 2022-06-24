

//* insertion des détails de la description produit sur la page produit *\\
//* variable de récupération de l'ID produit *\\
const IdProduct = window.location.search.split("?id=").join("");
let itemImg = document.querySelector(".item__img");
let product = [];

//*  requete pour obtenir les détails de la descritpion produit *\\

const getproductdetail = async () => {
  await fetch(`http://localhost:3000/api/products/${IdProduct}`)
    .then((res) => res.json())
    .then((data) => (product = data))
    .catch((error)=>{
      console.log(error.status);
    });
};

//* insertion des résultats de la requête dans la page *\\
const productdetail = async () => {
  await getproductdetail();

  //* erreur si client revient sur page produit directement ( fermeture navigateur) *\\
  if (IdProduct == "") {
    document.querySelector(
      ".item"
    ).innerHTML = ` <article style="font-size:200%" >
    
    <p id= product-page-empty > <center> <span style="color:blue"> OUPS </span>
     <br>
     <br>
      Cette page est vide <br> Veuillez selectionnez un produit sur notre page :</p>
    <a href="./index.html" style="text-decoration:none"  >  Acceuil </a> </article>`;
  }
  //* si procedure ok *\\
  else {
    document.title = `${product.name}`;
    itemImg.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
    title.textContent = `${product.name}`;
    price.textContent = `${product.price}`;
    description.textContent = `${product.description}`;
    //** affichage du choix des couleurs **//
    product.colors.forEach((n, i) => {
      colors.innerHTML += `<option value=${product.colors[i]}>${product.colors[i]}</option>`;
    });
  }
};

//** paramètres des animations **\\

//** animation couleur erreur ajout au panier **\\
const animColorError = () => {
  document.querySelector(".item__content__settings__color").innerHTML = `
  <label for="color-select" style="color:red" >Choisir une couleur :</label>
  <select name="color-select" id="colors">
    <option value="">--SVP, choisissez une couleur --</option>
  </select>`;
  setTimeout(() => {
    document.querySelector(
      ".item__content__settings__color"
    ).innerHTML = `<label for="color-select">Choisir une couleur :</label>
    <select name="color-select" id="colors">
      <option value="">--SVP, choisissez une couleur --</option>
    </select>`;
    product.colors.forEach((n, i) => {
      colors.innerHTML += `<option value=${product.colors[i]}>${product.colors[i]}</option>`;
    });
  }, 1000);
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
  document.querySelector(
    ".item__content__settings__quantity"
  ).innerHTML = ` <label for="itemQuantity" style="color:red"> Nombre d'article(s) (1-100) :</label>
  <input type="text" name="itemQuantity"  value="Choisissez une quantité" id="quantity" >`;
  setTimeout(() => {
    document.querySelector(
      ".item__content__settings__quantity"
    ).innerHTML = `<label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
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

//*--- ajout au panier si caractéristiques sont bonnes addtobasket--- *\\

//* erreur sur la quantité et la couleur *\\
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
      //* erreur sur la couleur *\\
      if (colors.value === "") {
        animColorError();
        animBouttonErreur();
        // alert("veuillez renseigner une couleur")
      } else if (
        //* erreur sur la quantité *\\
        quantity.value > parseInt(quantity.max) ||
        quantity.value < parseInt(quantity.min)
      ) {
        animQuantityError();
        animBouttonErreur();
        // alert("veuillez renseigner une quantitée entre 1 et 100")
      } else {
        //* panier valide *\\
        animBouttonAgree();
        // alert("veuillez renseigner une quantitée entre 1 et 100")
        const order = {
          id: IdProduct,
          quantity: quantity.value,
          color: colors.value,
          price: product.price,
          name: product.name,
        };

        //** enregistrement du panier dans local storage = LS **\\
        const saveCart = (cart) => {
          cart.sort((a, b) => {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
            if (a.id === b.id) {
              return 0;
            }
          });
          localStorage.setItem("order", JSON.stringify(cart));
        };

        //* recuperation des données dans LS *\\
        const getCart = () => {
          let cart = localStorage.getItem("order");
          if (cart == null) {
            return [];
          } else {
           
            return JSON.parse(cart);
          }
        };
        //* ajout produits dans la panier ( push basket et save basket ) *\\
        const addCart = (cart) => {
          let basket = getCart();

          let findbasket = basket.find(
            (basket) => basket.id == cart.id && basket.color === cart.color
          );

          if (findbasket != undefined) {
            findbasket.quantity = order.quantity;
          } else {
            basket.push(cart);
          }

          saveCart(basket);
        };

        addCart(order);
        getCart();
      }
    }
  });
};

getproductdetail();
productdetail();
addToBasket();


//========================= end product ; next => cart ========================\\