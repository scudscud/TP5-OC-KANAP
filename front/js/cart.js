
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
    // Cart.sort((a,b)=> {
    //    if ( a.id <  b.id) {return -1 }
    //   if ( a.id > b.id ){ return 1 }
    //   if ( a.id === b.id){return 0}     
    //  })  
    }
 }
 

        const fetchItem = async () => { 
       await  getCart();    
        // article = []    
       Cart.forEach((i,o,u) => {
        //  console.log(Cart);
     // console.log(i.id);
        // console.log(i.name);
        // console.log(i);
        // console.log(o);
        // console.log(u);    
        fetch(`http://localhost:3000/api/products/${i.id}`)  
            
        .then((res) => res.json()) 
        
        .then ((data) => { return image = data.imageUrl, description = data.description}     
          ) 
        // .then(() => {     
        //   test = {id : i.id, color : i.color, img : image, descr : description, nameProduct : i.name, price :i.price, quantity: i.quantity}
        // article.push(test)
        // // Cart.push(test)
        // // console.log(Cart);
        // // // console.log(test)    
        //  return article.sort((a,b)=> {      
        //     if ( a.id <  b.id) {return -1 }
        //     if ( a.id > b.id ){ return 1 }
        //     if ( a.id === b.id){return 0}             
        //    })         
        //   })  
      .then(()=>{
        listArticle = ` <article class="cart__item" data-id="${i.id}" data-color="${i.color}">
          <div class="cart__item__img">
          <img src="${image}" alt="${description}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>${i.name}</h2>
              <p>${i.color}</p>
              <p>${i.price}€</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté :  </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${i.quantity-1}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>  `  
        // console.log(`${i.id}`)
      }).then(()=>{
      cart__items.innerHTML +=listArticle})
      // .then(()=>{
      // console.log(listArticle);
      //   listArticle.sort((a,b)=> {      
      //     if ( a.id <  b.id) {return -1 }
      //     if ( a.id > b.id ){ return 1 }
      //     if ( a.id === b.id){return 0}    
      //    })  
      // }) 
      
    })  
      // .catch(()=>{
      //   console.error;
      // })
     
   };




  let itemQuantityChange = document.getElementsByClassName('itemQuantity');
    console.log(itemQuantityChange);
   const TotalBasket = async () => {
     await getCart()
     sum = []
     sumP = []  
   Cart.forEach((i,u,o) => {    
     sum.push(i.quantity++)   
     const reducer = (a,b) => (a + b);
    totalProduct = sum.reduce(reducer)
  // console.log(i.quantity);
  // console.log(i.price);
  totalArticle = (i.quantity-1) * i.price
    sumP.push(totalArticle)
    totalP = sumP.reduce(reducer)
    // console.log(totalArticle);
    totalQuantity.innerHTML = totalProduct
    totalPrice.innerHTML = totalP
   })
   }
   

  // const addProd =  ()=> {
  //   const el = document.getElementsByName('#input.itemQuantity')
  //   document.getElementsByName('input.itemQuantity').addEventListener('change',(e)=>{console.log(e.value);}) 
  // };
 
let firstNameError = document.querySelector ('#firstNameErrorMsg');
let lastNameError = document.querySelector('#lastNameErrorMsg');
let addressError = document.querySelector ('#addressErrorMsg');
let cityError = document.querySelector ('#cityErrorMsg');
let emailError= document.querySelector ('#emailErrorMsg');

let firstName = document.querySelector ('#firstName');
let lastName = document.querySelector ('#lastName');
let email = document.querySelector ('#email');
let city = document.querySelector ('#city');
let address = document.querySelector ('#address')


//create object to manage input submit validation o form
let errors = { firstName :true , lastName : true , address : true , city : true  , email : true }
// console.log(errors.firstName);
let allOk = false
  // let allOk = true; 
// let errorName = true


let orderButton = document.querySelector('input#order')

 const formError = (fieldlabel,regex, fieldResult, message, errorName) => {
    fieldlabel.addEventListener('input',()=> {
        if (regex.test(fieldlabel.value) ){
        
            fieldResult.innerHTML = `<span style="color:green"> Validé </span>`;
           
            errors[errorName] = false;
            orderButton.style.background = "#2c3e50"
        }
        else{
            fieldResult.innerHTML = message;
            errors[errorName] = true;
            // orderButton.style.background = "#DC143C";
            
        }
        
        
//        for(let k in errors){
//         switch (k){          
//           case errors === true :   allOk = false;
//           console.log(errors)
//           console.log(allOk)
//           break;
//           default:
//             allOk = true
//  }}

        for (let key in errors){
            if (  errors[key] ) {
              console.log(errors);
              console.log(allOk);
                 allOk = false; 
                 break;               
            }else{
               allOk = true
            }  }    
     
        // orderButton.disabled = !allOk && Cart.length===0 
        // orderButton.style.background = "#DC143C"
        // setTimeout(()=>{orderButton.style.background = "#2c3e50"},2000);
       
        // return alert("veuillez remplir le formulaire et/ou votre panier aussi c'est plus simple pour passer une commande ")          
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
//  console.log(errors)
//  console.log(allOk)

//  switch (errors){

//   case errors === true :   allOk = false;
//   console.log(errors)
//   console.log(allOk)
//   break;
//   default:
//     allOk = true

// }

        // for (let key in errors)
        //     if ( errors[key] === true ) {
        //       console.log(errors);
        //       console.log(allOk);
        //         allOk = false;                
        //     }else{
        //        allOk = true
        //     }             
        
 if( allOk === false ||  Cart.length===0 ) {
  // console.log(allOk);
  orderButton.disabled
  orderButton.style.background = "#DC143C"
   setTimeout(()=>{orderButton.style.background = "#2c3e50"},2000);
 

  
  //  alert("veuillez remplir le formulaire et/ou votre panier aussi c'est plus simple pour passer une commande ")
 }else{
let infoOrder = {
contact: { 
firstName : firstName.value,
lastName : lastName.value,
address : address.value,
email : email.value,
city : city.value,

},

products : {Cart}


}

// console.log(Cart)

 res = await fetch('http://localhost:3000/api/products/order', {
        method: 'POST',
       
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(infoOrder),
        
        
    })
    
  if (res.ok){
    let orderConfirm = await res.json()
    window.location.href = `confirmation.html?order_id=${orderConfirm.orderId}`
  }
  else{
    window.alert("Une erreur s'est produite.Veuillez reessayer ou contacter le support par telephone : 0123456789 ou par Email : support@name.com  !");
  }}

 
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






    
    

   
   

  
  
    // document.querySelector(".itemQuantity").addEventListener("change",(e) =>{
    //   console.log(e.target.value);
    //   let findbasket = basket.find( basket => basket.id == cart.id &&  basket.color === cart.color)
      
    //     findbasket = itemQuantity.value
    //     if(
    //       basket.quantity <= 0 ){
    //         basket = basket.filter(p => findbasket.id == basket.id)
    //         localStorage.setItem("order", JSON.stringify(basket))
    //       }
    //       else{
    //         localStorage.setItem("order", JSON.stringify(basket))
    //       }

    //  }
    // )
      
   
  
     





   fetchItem()
  //  addProd()
    TotalBasket()
  

  

      






    

    


   


