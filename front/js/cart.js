
emptybasket = document.querySelector("h1")
let basket = localStorage.getItem("order")



const getCart = async () => {
    cart = localStorage.getItem("order");
    // for (var i = 0; i < localStorage.length; i++) 
    if (cart === null){
      
      emptybasket.innerHTML = `<p > OUPSS <br> <br>
      Aucun de nos articles ne vous plait ? <br>
      Votre panier est vide
       <br>
       <br>
      <a href="./index.html" style="text-decoration:none" >Retour à nos produits </a></p>`
      totalQuantity.innerHTML = 0
      totalPrice.innerHTML = 0
      return Cart = []
      
    }else {  
     
    Cart = JSON.parse(cart) 
    return Cart.sort((a,b)=> {
      
       if ( a.id <  b.id) {return -1 }
      if ( a.id > b.id ){ return 1 }
      if ( a.id === b.id){return 0}     
     })  
    }
 }

// ------------------fetch produit ok ------------------------------\\
        const fetchItem = async () => { 
      await  getCart();     
    
      Cart.forEach((e,o,u) => {
      
      fetch(`http://localhost:3000/api/products/${e.id}`)    
      
        .then((res) => res.json()) 
        
        .then ((data) => { return image = data.imageUrl, description = data.description}     
          )
      .then(()=>{ listArticle =` <article class="cart__item" data-id="${e.id}" data-color="${e.color}">
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
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${e.quantity}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>  `
      }).then(()=>{ cart__items.innerHTML += listArticle})
    .then(()=>{

      const itemQuantitySelector = document.querySelectorAll('.itemQuantity')
      const deleteItemSelector = document.querySelectorAll(".deleteItem")
      const erreur = document.querySelectorAll(".cart__item__content__settings__quantity")
      for(let v = 0; v < deleteItemSelector.length; v++){
          itemQuantitySelector[v].addEventListener ('change', (e) =>{
            console.log(itemQuantitySelector[v].min);
            console.log(e.target.value);
            if (
              
              e.target.value < parseInt(itemQuantitySelector[v].min) 
              
            ) {
             erreur[v].innerHTML = `
             <div class="cart__item__content__settings__quantity">
             <p style="color:red" = "red">Qté MIN 1 article: </p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${Cart[v].quantity}">
           </div>`
              
            //   e.target.value = "1"
            // Cart[v].quantity = e.target.value  
            // localStorage.setItem("order", JSON.stringify(Cart))
            location.reload()

            }else if
            (e.target.value > parseInt(itemQuantitySelector[v].max)) {
             erreur[v].innerHTML = `
              <div class="cart__item__content__settings__quantity">
              <p style="color:red" = "red">Qté MAX 100 articles: </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${Cart[v].quantity}">
            </div>`
           
              // e.target.value = "100"
              // Cart[v].quantity = e.target.value  
              // localStorage.setItem("order", JSON.stringify(Cart))
              location.reload()
            }
            else
            
            {
            console.log(e.target.value);
            console.log(Cart);
              Cart[v].quantity = e.target.value   
          localStorage.setItem("order", JSON.stringify(Cart))
              // basket(order)
              location.reload()
            }
            
            })
          deleteItemSelector[v].addEventListener ('click', (event) => {
              event.preventDefault 
              // cart.splice(v,1)     
              // basket(order)
              // location.reload()
            })
      }


      
    })





    }) 
    


    // window.reload
   };
// -----------------------------fin fetch produit ok --------------------------------\\


   async function TotalBasket() {
  await fetchItem();
  let sumQuantity = 0;
  Cart.forEach((e) => {
    //  sumQuantity = []
    //  sumPrice = []  
    sumPrice = Cart.reduce((acc, e) => {
      return acc + e.price * e.quantity;
    }, 0);

    sumQuantity += parseInt(e.quantity);
    totalPrice.innerHTML = sumPrice;
    totalQuantity.innerHTML = sumQuantity;

  });

}

// const articleSelect = document.querySelectorAll(".cart_item")

// const delButton = document.querySelectorAll(".deleteItem")


// const itemQuantityChange = document.querySelectorAll(".itemQuantity")





// async function del() {
//   await TotalBasket()
// delButton.forEach((a) => {
//   console.log(a);
// a.addEventListener('click',(e)=>{
//   console.log(e.target.value);
//     console.log('ok');
//   })


  
// });

// }


//  delButton.addEventListener('click',(e)=>{
//   // console.log(delButton);
//   // console.log(e);

//   window.onload()
  


//  })











// for (let t = 0 ; t < delButton.length; t++ ){
// delButton[t].addEventListener('click',(e)=>{
//   e.preventDefault
//   console.log( delButton )
//   console.log("ok")
//   location.reload

// })}


// for ( let y = 0 ; y < itemQuantityChange.length; y++ ){

// itemQuantityChange[y].addEventListener('change',(e)=>{

// console.log("ok");



// })




// }

// const itemQuantitySelector = document.querySelectorAll('.itemQuantity')
// const deleteItemSelector = document.querySelectorAll(".deleteItem")
// for(let k = 0; k < deleteItemSelector.length; k++){
//       // itemQuantitySelector[k].addEventListener ('change', (event) =>{
//       //     // order[k].quantity = itemQuantitySelector[k].value
//       //     // saveBasket(order)
//       //     // location.reload()
//       //     console.log(event.target.value);
//       //   })
//       deleteItemSelector[k].addEventListener ('click', (event) => {
//           event.preventDefault 
//           console.log('ok');
//           // order.splice(k,1)     
//           // saveBasket(order)
//           // location.reload()
        
//         })
//   }


// const modValue = async () => {
// //  await fetchItem()
// let mod = document.querySelectorAll("input.itemQuantity")
// console.log(mod);

// for (let i = 0; i < mod.length; i++){
 

// mod[i].addEventListener('click',(ev)=>{
//   // parseInt(ev.target.value)
//    console.log('ok');

   

// })
// }

// }


// document.querySelector(".itemQuantity").addEventListener("change",async (e) =>{
//   console.log(e.target.value);
// //     let findbasket = basket.find( basket => basket.id == cart.id &&  basket.color === cart.color)
  
// //       findbasket = itemQuantity.value
// //   //     if(
// //   //       basket.quantity <= 0 ){
// //   //         basket = basket.filter(p => findbasket.id == basket.id)
// //   //         localStorage.setItem("order", JSON.stringify(basket))
// //   //       }
// //   //       else{
// //   //         localStorage.setItem("order", JSON.stringify(basket))
// //   //       }

// //   //  }
// //   // )


// // const delButton = (el, product) => {


// // // console.log(delButton);
// // // let test = document.querySelectorAll('.cart__item')
// // // // console.log(test);

// // // for(let item of delButton){
// // // delButton[item].addEventListener('click',()=>{
// // //   console.log('ik')
// // // })


// // // }

// // }
// }
// // }

  
let firstNameError = document.querySelector ('#firstNameErrorMsg');
let lastNameError = document.querySelector('#lastNameErrorMsg');
let addressError = document.querySelector ('#addressErrorMsg');
let cityError = document.querySelector ('#cityErrorMsg');
let emailError= document.querySelector ('#emailErrorMsg');

let firstName = document.querySelector ('#firstName');
let lastName = document.querySelector ('#lastName');
let email = document.querySelector ('#email');
let city = document.querySelector ('#city');
let address = document.querySelector ('#address');

let errors = { firstName :true , lastName : true , address : true , city : true  , email : true };

let allOk = false;
let orderButton = document.querySelector('input#order');

window.addEventListener('load',(e) => {
   firstName.value = ""
   lastName.value = ""
   email.value = ""
   city.value = ""
   address.value = ""
})

  const formError =  (fieldlabel,regex, fieldResult, message, errorName) => {
    fieldlabel.addEventListener('input',()=> {
        if (regex.test(fieldlabel.value) ){
        
            fieldResult.innerHTML = `<span style="color:green"> Validé </span>`;
            fieldlabel.style.background =  "green"
            errors[errorName] = false;
            orderButton.style.background = "#2c3e50"
        }
        else  {
            fieldResult.innerHTML = message;
            fieldlabel.style.background =  "red"
            errors[errorName] = true;
            
        }
        
    })
}

formError (firstName,/^[a-zA-Z-\s]+$/,firstNameError,`<span style=color:orange>tu as passé l'age d'ecrire ton pr3n0m avec des mun3r0 ou avec des ...</span>`,"firstName" );
formError (lastName,/^[a-zA-Z-\s]+$/,lastNameError,`<span style=color:orange>tu as passé l'age d'ecrire ton n0m avec des num3r0s ou avec des ...</span>`, "lastName" );
formError (address,/^[A-Za-z-0-9|\s]{3,30}$/,addressError,`<span style=color:orange>A moins que tu habite sur une autre planete, il y a un probleme dans ton adresse</span> `,"address")
formError (city,/^[a-zA-Z-\s]+$/,cityError,`<span style=color:orange>le nom de ta ville svp pas un code postal</span>`, "city" );
formError (email,/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,7}$/,emailError,`<span style=color:orange>il m@nque un dét@il pour v@lider l'em@il</span>`, "email" );


// fencent=window.open(url,nom,"top="+haut+",left="+Gauche+",width="+largeur+",height="+hauteur+","+options);
// orderButton.addEventListener('submit',async(e)=>{
//   e.preventDefault()})


orderButton.addEventListener('click',async ( e)=>{
 
 await getCart()
 e.preventDefault()

 for (let key in errors){
            if (  errors[key] === true ) {
              let inputValue =  document.getElementById(key)


              inputValue.animate([{ transform: `translate(4%)` }], {
                duration: 200,
                iterations: 4,
              });
              inputValue.style.background = "#DC143C"
              setTimeout(() => {
                inputValue.style.background = "white"
               
              }, 2000);
              inputValue.value = `Veuillez completer ce champ`
              setTimeout(() => {
                inputValue.value = ""
               
              }, 2000);
            
             
            ;
              console.log(allOk);
                 allOk = false; 
                 break;               
            }else{
               allOk = true
            }  }    
     
            
    
 if( allOk === false ||  Cart.length===0 ) {

  
  // orderButton.disabled
  orderButton.animate([{ transform: `translate(4%)` }], {
    duration: 200,
    iterations: 4,
  });
  orderButton.style.background = "#DC143C"
   setTimeout(()=>{orderButton.style.background = "#2c3e50"},2000);
   
   
  
  //  alert("veuillez remplir le formulaire et/ou votre panier aussi c'est plus simple pour passer une commande ")
 }else{
  // orderButton.submit
  orderButton.style.background = "green"

 
let infoOrder = {
contact: { 
firstName : firstName.value,
lastName : lastName.value,
address : address.value,
email : email.value,
city : city.value,

},

products : Cart.map((i)=>{
  return i.id
})


}



 res = await fetch('http://localhost:3000/api/products/order', {
        method: 'POST',
       
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoOrder),
        
        
    })
  
  if (res.ok){
   
    let orderConfirm =  await res.json()
  //  window.alert(orderConfirm.orderId)
   

    window.location.href = `confirmation.html?order_id=${orderConfirm.orderId}`
    
  }
  else{
    window.alert("Une erreur s'est produite.Veuillez reessayer ou contacter le support par telephone : 0123456789 ou par Email : support@name.com  !");
  }
  

}

 
  });

  

//  orderButton.addEventListener('submit',(e)=>{

 
//    fetch('http://localhost:3000/api/products/order', {
//             method: 'POST',
           
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(infoOrder),
            
            
//         })

//   if (res.ok){
//     let orderConfirm = res.json()
//     window.location.href = `confirmation.html?order_id=${orderConfirm.orderId}`
//   }
//   else{
//     window.alert("Une erreur s'est produite.Veuillez reessayer ou contacter le support par telephone : 0123456789 ou par Email : support@name.com  !");
//   }})








// })

    
    

   
   

  
  
   
      
   
  
     





  //  fetchItem()
  //  addProd()
    TotalBasket()
    // modValue()
  //  del()

  

      






    

    


   


