
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

// //* boucle for each ok bug apparartion 1 er item dans panier **///
// const addCart = () => {
//   let cart = getCart();
 
//   cart.forEach((o,i)=>{
//  let find = cart.find(c => cart[i][0].id == order[0].id && cart[i][0].color == order[0].color)
//  console.log(cart);
//   //   console.log(find);
//   // console.log(cart[0][0].color);
//   // console.log(order[0].color);
//   // console.log(cart[0][0].id);
//   //   console.log(order[0].id);
//    if( find != undefined) {
//     // console.log(cart[0][0].quantity);
//     //   console.log(order[0].quantity);
//     //   console.log("test");
//       cart[i][0].quantity = order[0].quantity
      

//    } else { 
     
    
//     cart.push(order)
//     saveCart(cart)
   
//    }})
//    saveCart(cart)


// }

// //* ajout d'item local storage sans bug **//

// const addCart = () => {
//   let cart = getCart();
 
// let find = cart.find(c => cart[0][0].id == order[0].id && cart[0][0].color == order[0].color)

//   //   console.log(find);
//   // console.log(cart[0][0].color);
//   // console.log(order[0].color);
//   // console.log(cart[0][0].id);
//   //   console.log(order[0].id);
//    if( find != undefined) {
//     // console.log(cart[0][0].quantity);
//     //   console.log(order[0].quantity);
//     //   console.log("test");
//       cart[0][0].quantity = order[0].quantity


//    } else { 


//     cart.push(order)
//     saveCart(cart)

//    }
//    saveCart(cart)





// }
// //* boucle spawn **\\\

// const addCart = () => { 
          
//   let cart = getCart(); 
//   // console.log(cart);
//  if(localStorage.getItem("order") === null )
//   {
//     saveCart([order]) 

//   }
//   else if (localStorage.getItem("order") !== null ) {
  
 
//     cart.forEach((o,i,u)=>{
//      let find = cart.find(c => cart[i][0].id == order[0].id && cart[i][0].color == order[0].color)
//      if( find != undefined) {           
//       cart[i][0].quantity = order[0].quantity
//       // saveCart(cart) 
//     }
      
    
      
      
//       else{
        
//         cart.push(order)
//         saveCart(cart)


//       }
//     }) 
//   }}formError (email,/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/,emailError,`<span style=color:orange>il m@nque un dét@il pour v@lider l'em@il</span>`, "email" );