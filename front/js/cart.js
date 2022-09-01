emptybasket = document.querySelector("h1");
emptybasketForm = document.querySelector(".list");
emptymain = document.querySelector(".cart");

let sum = [];

// let listOrder = localStorage.getItem("order");
//-------------- panier vide et tri des produits ( non fonctionnel parametres serveur manquant)----\\
// const getCart = () => {
//   // for (var i = 0; i < localStorage.length; i++)
//   if (listOrder === null) {
//     emptybasket.innerHTML = `<p > OUPSS <br> <br>
//       Aucun de nos articles ne vous plait ? <br>
//       Votre panier est vide
//        <br>
//        <br>
//       <a href="./index.html" style="text-decoration:none" >Retour à nos produits </a></p>`;
//     emptymain.innerHTML = ``;
//     return [];
//     //---------tri des produits par noms et couleurs --------------\\
//   } else {
//      list = JSON.parse(listOrder);
//   }
// };

// ------------------fetch produit requete API localstorage  ------------------------------\\
const fetchItem = async () => {
  await getCartTotal;

  // ----------- verification de panier  -------------------\\
  if (list.length < 1) {
    emptybasket.innerHTML = `<p > OUPSS <br> <br>
      Aucun de nos articles ne vous plait ? <br>
      Votre panier est vide
    <br>
    <br>
      <a href="./index.html" style="text-decoration:none" >Retour à nos produits </a></p>`
    emptymain.innerHTML = ``;
  }
  //_____________ requete API produit du panier____________________\\

  for (let e = 0; e < list.length; e++) {
    const res = await fetch(`http://localhost:3000/api/products/${list[e].id}`)
      .catch((error) => {
        console.log(error.status);
      })
      .then((res) => res.json())
      .then((data) => {
        return (info = {
          idProduct: list[e].id,
          colorProduct: list[e].color,
          imageProduct: data.imageUrl,
          descriptionProduct: data.description,
          nameProduct: data.name, 
          priceProduct: data.price,
          quantityProduct: list[e].quantity,
        });
      })
      .then((info) => {
        sum.push(info);
        return sum.sort((a, b) => {
          if (a.idProduct < b.idProduct) {
            return -1;
          }
          if (a.idProduct > b.idProduct) {
            return 1;
          }
          if (a.idProduct === b.idProduct) {
            return 0;
          }
        });
        //_________ affichage des produits _______________________\\
      })
      .then(() => {
      
        let listArticle = ` <article class="cart__item" data-id="${sum[e].idProduct}" data-color="${sum[e].colorProduct}">
          <div class="cart__item__img">
          <img src="${sum[e].imageProduct}" alt="${sum[e].descriptionProduct}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>${sum[e].nameProduct}</h2>
              <p>${sum[e].colorProduct}</p>
              <p>${sum[e].priceProduct}€</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${sum[e].quantityProduct}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>  `;
        cart__items.innerHTML += listArticle;
  
      }).then(()=>{
    //--------------modification quantité ou suppression des produits du client ----------------\\

    const itemQuantitySelector = document.querySelectorAll(".itemQuantity");
    // const deleteItemSelector = document.querySelectorAll(".deleteItem");
    // const cartItems = document.querySelector("#cart__items");
    const erreur = document.querySelectorAll(
       ".cart__item__content__settings__quantity"
       );
        for (let v = 0; v  <itemQuantitySelector.length; v++) {
      // -------verification de la quantité du produit et modification du produit ----------- \\
                         // geston des erreurs dûe au client \\
       itemQuantitySelector[v].addEventListener("change", (e) => {
        // console.log(e.target.value);
        if (e.target.value < parseInt(itemQuantitySelector[v].min)) {
          erreur[v].innerHTML = `
              <div class="cart__item__content__settings__quantity">
              <p style="color:red" = "red">Qté MIN 1 article: </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${list[v].quantity}"></div>`;
          setTimeout(() => {
            erreur[v].innerHTML = `
                <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${list[v].quantity}">
              </div>`;
          }, 2000);
          location.reload();
        } else if (e.target.value > parseInt(itemQuantitySelector[v].max)) {
          erreur[v].innerHTML = `
              <div class="cart__item__content__settings__quantity">
              <p style="color:red" = "red">Qté MAX 100 articles: </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${list[v].quantity}">
            </div>`;
          setTimeout(() => {
            erreur[v].innerHTML = `
              <div class="cart__item__content__settings__quantity">
              <p style="color:red" = "red">Qté MAX 100 articles: </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${list[v].quantity}">
            </div>`;
          }, 2000);
          location.reload();
          // validation de la quantité à modifier \\
        } else {
          list[v].quantity = e.target.value;
          localStorage.setItem("order", JSON.stringify(list));
          totalBasket()
      
        }
     
       });
    
       
      }
    })
  }
  totalBasket()
};
const delBtn = async () => {
await fetchItem()
await getCartTotal()

const deleteItemSelector = document.querySelectorAll(".deleteItem");
const cartItems = document.querySelector("#cart__items");
deleteItemSelector.forEach((v,i)=>{
v.addEventListener("click", (event) => {
  event.preventDefault;
 
  const cardParent = event.composedPath().at(4)
  const del = cartItems.removeChild(cardParent)


  const findProduct  = list.find((el) => el.id === cardParent.dataset.id && el.color === cardParent.dataset.color);
   restProduct = list.filter((el)=>el !== findProduct)
  console.log(restProduct );
  localStorage.setItem("order", JSON.stringify(restProduct));

  totalBasket()
  // fetchItem()

})


})
  


}
// -----------------------------fin fetch produit ok --------------------------------\\
const getCartTotal = () => {
  let listOrder = localStorage.getItem("order");
  // for (var i = 0; i < localStorage.length; i++)
  if (listOrder === null) {
    emptybasket.innerHTML = `<p > OUPSS <br> <br>
      Aucun de nos articles ne vous plait ? <br>
      Votre panier est vide
       <br>
       <br>
      <a href="./index.html" style="text-decoration:none" >Retour à nos produits </a></p>`;
    emptymain.innerHTML = ``;
    return [];
    //---------tri des produits par noms et couleurs --------------\\
  } else {
   return list = JSON.parse(listOrder);
  }
};


//___________________ total des produits et prix ____________________________\\

async function totalBasket() {
  // await fetchItem
  // await delBtn
  await getCartTotal()
  let totalQuantityValue = 0;
  let totalPriceValue = 0;
  const totalQuantity = document.getElementById("totalQuantity");
  const totalPrice = document.getElementById("totalPrice");
  // let listOrder = localStorage.getItem("order");
  // -------------- panier vide et tri des produits ( non fonctionnel parametres serveur manquant)----\\
  // const getCartTotal = () => {
  //   // for (var i = 0; i < localStorage.length; i++)
  //   if (listOrder === null) {
  //     emptybasket.innerHTML = `<p > OUPSS <br> <br>
  //       Aucun de nos articles ne vous plait ? <br>
  //       Votre panier est vide
  //        <br>
  //        <br>
  //       <a href="./index.html" style="text-decoration:none" >Retour à nos produits </a></p>`;
  //     emptymain.innerHTML = ``;
  //     return [];
  //     //---------tri des produits par noms et couleurs --------------\\
  //   } else {
  //     return JSON.parse(listOrder);
  //   }
  // };
  
  let getProductsInArray = await getCartTotal()
  let apiData = await fetch(`http://localhost:3000/api/products`)
  .catch((error) => {
    console.log(error.status);
  })
  .then((res) => res.json())
  //  console.log(getProductsInArray);
 
  if (getProductsInArray.length > 0) {
      getProductsInArray.forEach((localStorageProduct) => {
      
          const item = apiData.find(element => element._id == localStorageProduct.id);
          if (item) {
              totalQuantityValue += parseInt(localStorageProduct.quantity);
              totalPriceValue += parseInt(item.price * localStorageProduct.quantity);

              totalQuantity.innerText = totalQuantityValue;
              totalPrice.innerText = totalPriceValue;
          }
      });
  } else {
   
      emptybasket.innerHTML = `<p > OUPSS <br> <br>
        Aucun de nos articles ne vous plait ? <br>
        Votre panier est vide
      <br>
      <br>
        <a href="./index.html" style="text-decoration:none" >Retour à nos produits </a></p>`
      emptymain.innerHTML = ``;
    
  }
}


// async function TotalBasket() {
//   await fetchItem();
//   let sumQuantity = 0;
//   let sumPrice = 0
//   sum.forEach((e,i) => {
//     sumPrice += (sum[i].priceProduct * parseInt(sum[i].quantityProduct));
//     sumQuantity += parseInt(sum[i].quantityProduct);
//     totalPrice.innerHTML = sumPrice;
//     totalQuantity.innerHTML = sumQuantity;
//   });
// }
// function TotalBasketProduct() {
//   let sumQuantity = 0;
//   let sumPrice = 0;
//   sum.forEach((e, i) => {
//     sumPrice += sum[i].priceProduct * parseInt(sum[i].quantityProduct);
//     sumQuantity += parseInt(sum[i].quantityProduct);
//     totalPrice.innerHTML = sumPrice;
//     totalQuantity.innerHTML = sumQuantity;
//   });
// }
//------------------------ formulaire info client -----------------\\

//_________________ parametre de verification info avant requete POST_____________________\\
let firstNameError = document.querySelector("#firstNameErrorMsg");
let lastNameError = document.querySelector("#lastNameErrorMsg");
let addressError = document.querySelector("#addressErrorMsg");
let cityError = document.querySelector("#cityErrorMsg");
let emailError = document.querySelector("#emailErrorMsg");

let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let address = document.querySelector("#address");

let errors = {
  firstName: true,
  lastName: true,
  address: true,
  city: true,
  email: true,
};

let allOk = false;
let orderButton = document.querySelector("input#order");

window.addEventListener("load", (e) => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  city.value = "";
  address.value = "";
});

//_________________ function REGEX et parametres REGEX ____________________\\

const formError = (fieldlabel, regex, fieldResult, message, errorName) => {
  fieldlabel.addEventListener("input", () => {
    if (regex.test(fieldlabel.value)) {
      fieldResult.innerHTML = `<span style="color:green"> Validé </span>`;
      fieldlabel.style.background = "#439451";
      errors[errorName] = false;
      orderButton.style.background = "#2c3e50";
    } else {
      fieldResult.innerHTML = message;
      fieldlabel.style.background = "#8a5b5b";
      errors[errorName] = true;
    }
  });
};

formError(
  firstName,
  /^[a-zA-Z-\s]+$/,
  firstNameError,
  `<span style=color:orange>tu as passé l'age d'ecrire ton pr3n0m avec des mun3r0 ou avec des ...</span>`,
  "firstName"
);
formError(
  lastName,
  /^[a-zA-Z-\s]+$/,
  lastNameError,
  `<span style=color:orange>tu as passé l'age d'ecrire ton n0m avec des num3r0s ou avec des ...</span>`,
  "lastName"
);
formError(
  address,
  /^[A-Za-z-0-9|\s]{3,30}$/,
  addressError,
  `<span style=color:orange>A moins que tu habite sur une autre planete, il y a un probleme dans ton adresse</span> `,
  "address"
);
formError(
  city,
  /^[a-zA-Z-\s]+$/,
  cityError,
  `<span style=color:orange>le nom de ta ville svp pas un code postal</span>`,
  "city"
);
formError(
  email,
  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,7}$/,
  emailError,
  `<span style=color:orange>il m@nque un dét@il pour v@lider l'em@il</span>`,
  "email"
);

//___________________ ecoute order button et verification validité donnees client __________________\\
orderButton.addEventListener("click", async (e) => {
  await getCartTotal();
  e.preventDefault();

  for (let key in errors) {
    if (errors[key] === true) {
      let inputValue = document.getElementById(key);

      inputValue.animate([{ transform: `translate(4%)` }], {
        duration: 200,
        iterations: 4,
      });
      inputValue.style.background = "#DC143C";
      setTimeout(() => {
        inputValue.style.background = "white";
      }, 2000);
      inputValue.value = `Veuillez completer ce champ`;
      setTimeout(() => {
        inputValue.value = "";
      }, 2000);

      console.log(allOk);
      allOk = false;
      break;
    } else {
      allOk = true;
    }
  }

  if (allOk === false || list.length === 0) {
    // orderButton.disabled
    orderButton.animate([{ transform: `translate(4%)` }], {
      duration: 200,
      iterations: 4,
    });
    orderButton.style.background = "#DC143C";
    setTimeout(() => {
      orderButton.style.background = "#2c3e50";
    }, 2000);
  } else {
    orderButton.style.background = "green";

    let infoOrder = {
      contact: {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        email: email.value,
        city: city.value,
      },

      products: list.map((i) => {
        return i.id;
      }),
    };
    //__________ envoi requete API POST apres vreification validité info ___________\\

    res = await fetch("http://localhost:3000/api/products/order", {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoOrder),
    });

    if (res.ok) {
      let orderConfirm = await res.json();

      window.location.href = `confirmation.html?order_id=${orderConfirm.orderId}`;
    } else {
      window.alert(
        "Une erreur s'est produite.Veuillez reessayer ou contacter le support par telephone : 0123456789 ou par Email : support@name.com  !"
      );
    }
  }
});

// fetchItem();
getCartTotal()
totalBasket();
delBtn()
// TotalBasketProduct ();

//======================= end list ; next => confirmation =========================\\
