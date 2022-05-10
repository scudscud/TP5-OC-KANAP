
emptybasket = document.querySelector("h1")

const getCart = async () => {
    let cart = localStorage.getItem("order");
    // for (var i = 0; i < localStorage.length; i++) 
    if (cart === null){
      
      emptybasket.innerHTML = `<p > OUPSS <br> <br>
      Aucun de nos articles ne vous plait ? <br>
      Votre panier est vide
       <br>
       <br>
      <a href="./index.html" style="text-decoration:none" >Retour à nos produits </a></p>`

      return Cart = []
      
    }else { 
       
     return Cart = JSON.parse(cart)
      
    }
 }
   

        const fetchItem = async () => { 
       await  getCart();
       
       
        console.log(Cart);
       
       Cart.forEach((i,o) => {
        console.log(Cart[o].id);
        Cart.sort((a,b)=> a.id == b.id)
        console.log(Cart);
      fetch(`http://localhost:3000/api/products/${Cart[o].id}`)        
            
        .then((res) => res.json()) 
        .then ((data) => {
          
        
       
      
        cart__items.innerHTML += `<article class="cart__item" data-id="${Cart[o].id}" data-color="${Cart[o].color}">
         <div class="cart__item__img">
         <img src="${data.imageUrl}" alt="">
         </div>
         <div class="cart__item__content">
           <div class="cart__item__content__description">
             <h2>${data.name}</h2>
             <p>${Cart[o].color}</p>
             <p>${Cart[o].price}€</p>
           </div>
           <div class="cart__item__content__settings">
             <div class="cart__item__content__settings__quantity">
               <p>Qté :  </p>
               <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${Cart[o].quantity}">
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

getCart()

fetchItem()

