//* Recuperer les informations du produit
const getproduct = () => {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (object) {
      for (let i = 0; i < 1; i++) {
      console.log(object);
      










//*insertion des produits sur la page index
const adItemIndex = document.getElementById("items");
const getproduct = () => {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (object) {
      for (let i = 0; i < 1; i++) {
      console.log(object);
      object.forEach((element) => {
        adItemIndex.innerHTML += `<a href="./product.html?id=42">
<article><img src="http://localhost:3000/images/kanap01.jpeg" alt="Lorem ipsum dolor sit amet, Kanap name1">
  <h3 class="productName">Kanap name1</h3>
  <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
</article>
</a> `
        
      });
      }
    })
    
};
const product = getproduct();
//* recuperer une information précise
function getproductdetail() {
  fetch("http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (products) {
     
        console.log(products);
      
    })
}











 
    