
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


// _____________________________ fetch pas ok _____________________________\\
// article = []
// const fetchItem = async () => {
//   await getCart()
// .then(()=>{ Cart.forEach( async (i) => {
// let testP =  await fetch(`http://localhost:3000/api/products/${i.id}`)
// let data = await testP.json()
// console.log(data);
//  data = {img : data.imageUrl, description : data.description}
// console.log(article)
// article = {id : i.id, color : i.color, img : data.imageUrl, descr : data.description, nameProduct : i.name, price :i.price, quantity: i.quantity}
// })}) 

// .then(()=>{
  
//   for( let e in article){
  
//   listArticle =` <article class="cart__item" data-id="${id}" data-color="${color}">
// //         <div class="cart__item__img">
// //         <img src="${data.imageUrl}" alt="${descr}">
// //         </div>
// //         <div class="cart__item__content">
// //           <div class="cart__item__content__description">
// //             <h2>${e.name}</h2>
// //             <p>${e.color}</p>
// //             <p>${e.price}€</p>
// //           </div>
// //           <div class="cart__item__content__settings">
// //             <div class="cart__item__content__settings__quantity">
// //               <p>Qté :  </p>
// //               <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${e.quantity+1}">
// //             </div>
// //             <div class="cart__item__content__settings__delete">
// //               <p class="deleteItem">Supprimer</p>
// //             </div>
// //           </div>
// //         </div>
// //       </article>  `

// }

// })



// }
// _____________________________________fin fetch pas ok_________________________________________\\

// ______________________spawn Item _____________________________________________\\
  //  Cart.forEach((i,u,o) => {    
  //    sum.push(i.quantity++)   
  //    const reducer = (a,b) => (a + b);
  //   totalProduct = sum.reduce(reducer)
  // // console.log(i.quantity);
  // // console.log(i.price);
  // totalArticle = (i.quantity-1) * i.price
  //   sumP.push(totalArticle)
  //   totalP = sumP.reduce(reducer)
  //   // console.log(totalArticle);
  //   totalQuantity.innerHTML = totalProduct
  //   totalPrice.innerHTML = totalP
  //  })
    // let sumQuantity = Cart.reduce((acc, e)=> {
  //   console.log(e.quantity);
  //   toString(e.quantity)
  //      return acc + e.quantity
  //    },0)
  




  let article = []  
        const fetchItem = async () => { 
       await  getCart();    
        
        // Cart.sort((a,b)=> {
        //   if ( a.id <  b.id) {return -1 }
        //  if ( a.id > b.id ){ return 1 }
        //  if ( a.id === b.id){return 0}     
        // } )
    
       Cart.forEach((e,o,u) => {
        
        //  console.log(Cart);
     // console.log(i.id);
        // console.log(i.name);
        // console.log(i);
        // console.log(o);
        // console.log(u);    
       fetch(`http://localhost:3000/api/products/${e.id}`)    
     
        .then((res) => res.json()) 
        
        .then ((data) => { return image = data.imageUrl, description = data.description}     
          )
        .then(() => {     
          test = {id : e.id, color : e.color, img : image, descr : description, nameProduct : e.name, price :e.price, quantity: e.quantity}
        article.push(test)

     
        console.log(article)
        //  return article.sort((a,b)=> {      
        //     if ( a.nameProduct <  b.nameProduct ) {return -1 }
        //     if ( a.nameProduct  > b.nameProduct  ){ return 1 }
        //     if ( a.nameProduct  === b.nameProduct ){return 0}             
        //    })         
          })   
         })
        };  



        const SpawnP = async () => {
          await fetchItem()
         
      .then(()=>{
       
        console.log(article)
        listArticle = 
        article.forEach((e)=>{
        listArticle =` <article class="cart__item" data-id="${e.id}" data-color="${e.color}">
          <div class="cart__item__img">
          <img src="${image}" alt="${description}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>${e.name}</h2>
              <p>${e.color}</p>
              <p>${e.price}€</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté :  </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${e.quantity}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>  `
     

        // console.log(`${i.id}`)
      }) }) 
      .then(()=>{cart__items.innerHTML = listArticle})
      // .then(()=>{
      // console.log(listArticle.id);
      //   listArticle.sort((a,b)=> {      
      //     if ( a.id <  b.id) {return -1 }
      //     if ( a.id > b.id ){ return 1 }
      //     if ( a.id === b.id){return 0}    
      //    })  
      // }) 
     
   
      // .catch(()=>{
      //   console.error('error.status');
      // })
    }
  
  SpawnP()