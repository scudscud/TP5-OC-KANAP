const getCart = async () => {
    let cart = localStorage.getItem("order");
    // for (var i = 0; i < localStorage.length; i++) 
    if (cart == null){
      return []
      
    }else { 
       
     return Cart = JSON.parse(cart)
      
    }
 }
 

        const fetchItem = async () => { 
       await  getCart();
       
       
       Cart.forEach((i,o) => {
        
      fetch(`http://localhost:3000/api/products/${Cart[o][0].id}`)        
            
        .then((res) => res.json()) 
        .then ((data) => {
          console.log(Cart)
     
        
        cart__items.innerHTML += `<article class="cart__item" data-id="${Cart[o][0].id}" data-color="${Cart[o][0].color}">
         <div class="cart__item__img">
         <img src="${data.imageUrl}" alt="">
         </div>
         <div class="cart__item__content">
           <div class="cart__item__content__description">
             <h2>${data.name}</h2>
             <p>${Cart[o][0].color}</p>
             <p>${Cart[o][0].price}€</p>
           </div>
           <div class="cart__item__content__settings">
             <div class="cart__item__content__settings__quantity">
               <p>Qté :  </p>
               <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${Cart[o][0].quantity}">
             </div>
             <div class="cart__item__content__settings__delete">
               <p class="deleteItem">Supprimer</p>
             </div>
           </div>
         </div>
       </article> `     
     }     
     )  
     }
     )
    };
   
//         const SpawnItem = async () =>  {
//         await fetchItem(); 
//         Cart.forEach((productdata) => {
//         cart__items.innerHTML = `<article class="cart__item" data-id="${Cart[0]}" data-color="${Cart[2]}">
//          <div class="cart__item__img">
//          <img src="${productdata.imageUrl}" alt="">
//          </div>
//          <div class="cart__item__content">
//            <div class="cart__item__content__description">
//              <h2>${productdata.name}</h2>
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
// SpawnItem() 



fetchItem()

