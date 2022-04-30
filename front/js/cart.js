const getCart = async () => {
    let cart = localStorage.getItem("order");
    if (cart == null){
      return [];
    }else {  
     Cart = JSON.parse(cart)
     
     
    }
 }
    let productdata  = []

    const fetchItem = async () => { 
        await getCart();
        fetch(`http://localhost:3000/api/products/${Cart[0]}`)        
    .then((res) => res.json())
    // .then ((data) => { productdata = (data); });
    
    .then ((product) => {Cart.forEach(() => {
        cart__items.innerHTML = `<article class="cart__item" data-id="${Cart[0]}" data-color="${Cart[2]}">
         <div class="cart__item__img">
         <img src="${product.imageUrl}" alt="">
         </div>
         <div class="cart__item__content">
           <div class="cart__item__content__description">
             <h2>${product.name}</h2>
             <p>${Cart[2]}</p>
             <p>${Cart[3]}€</p>
           </div>
           <div class="cart__item__content__settings">
             <div class="cart__item__content__settings__quantity">
               <p>Qté :  </p>
               <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${Cart[1]}">
             </div>
             <div class="cart__item__content__settings__delete">
               <p class="deleteItem">Supprimer</p>
             </div>
           </div>
         </div>
       </article> `
           
     }     
     )   })
    };
   
//     const SpawnItem = async () =>  {
        
//         await fetchItem(); 
//         console.log(productdata);
//         Cart.forEach(() => {
//         cart__items.innerHTML = `<article class="cart__item" data-id="${Cart[0]}" data-color="${Cart[2]}">
//          <div class="cart__item__img">
//          <img src="${productdata.imageUrl}" alt="">
//          </div>
//          <div class="cart__item__content">
//            <div class="cart__item__content__description">
//              <h2>Nom du produit</h2>
//              <p>${Cart[2]}</p>
//              <p>${Cart[3]}€</p>
//            </div>
//            <div class="cart__item__content__settings">
//              <div class="cart__item__content__settings__quantity">
//                <p>Qté :  </p>
//                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${Cart[1]}">
//              </div>
//              <div class="cart__item__content__settings__delete">
//                <p class="deleteItem">Supprimer</p>
//              </div>
//            </div>
//          </div>
//        </article> `
           
//      }     
//      )  
// };


fetchItem()
getCart()
// SpawnItem() 