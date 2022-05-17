
emptybasket = document.querySelector("h1")

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
    Cart.sort((a,b)=> {
       
      if ( a.id <  b.id) {return -1 }
      if ( a.id > b.id ){ return 1 }
      if ( a.id === b.id){return 0}    
     })  
    }
 }
 

        const fetchItem = async () => { 
       await  getCart();    
       
       Cart.forEach((i,o,u) => {
     // console.log(i.id);
        // console.log(i.name);
        // console.log(i);
        // console.log(o);
        // console.log(u);
        
        fetch(`http://localhost:3000/api/products/${i.id}`)  
            
        .then((res) => res.json()) 
        
        .then ((data) => { return image = data.imageUrl, description = data.description}     
          ) 
        .then(() => { 
        
        cart__items.innerHTML += `<article class="cart__item" data-id="${i.id}" data-color="${i.color}">
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
               <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${i.quantity}">
             </div>
             <div class="cart__item__content__settings__delete">
               <p class="deleteItem">Supprimer</p>
             </div>
           </div>
         </div>
       </article> 
      
       ` 
       
      } )
      
    }    
    )   
   };
   
   const TotalBasket = () => {
     getCart()
     sum = []
     sumP = []
     
   Cart.forEach((i,u,o) => {    
     sum.push(i.quantity++)   
     const reducer = (a,b) => a + b;
    totalProduct = sum.reduce(reducer)
  //  const sumProduct=(number)=>{    
  //     Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  // }
  // total.toString().split('').reduce(function(a,b){return +a + +b}, 0)
  console.log(totalProduct);
  console.log(i.price);
    sumP.push(i.price)
    totalP = sumP.reduce(reducer)
    totalQuantity.innerHTML = totalProduct
    totalPrice.innerHTML = totalP



   })
   
   
  

   }
    
   
    
    

   
   

  
  
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
      
   
  
     






   
    TotalBasket()
    getCart()
    fetchItem()
  

      






    

    


   


