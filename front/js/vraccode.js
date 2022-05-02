
//**** test bug async ???? spwan product //cart.js *****\\

//     const SpawnItem = async () =>  {
//         await fetchItem(); 
//         Cart.forEach((productdata) => {
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
// SpawnItem() 



let addproduct = cart.find(i => i.id == IdProduct)
          if(
            addproduct != undefined){ addproduct.quantity++}
          else {
            cart.quantity = 1; 
           
          }



          const getCart = async () => {
            let cart = []
            
             cart.forEach((i) => {
               localStorage.key(i)
               if (cart == null){
                 return [];
               }
               else { 
                 console.log(Cart);
             Cart = JSON.parse(cart)
               }
            }
             )}