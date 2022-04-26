// const titleprod = document.getElementById("title");
// const priceprod = document.getElementById("price");
// const descriptionprod = document.getElementById("description");
// let choicecolor = document.getElementById("colors[i]");




//* insertion des détails de la description produit sur la page produit *\\
//* variable de récupération de l'ID produit *\\
let IdProduct = window.location.search.split("?id=").join("");

let itemImg = document.querySelector(".item__img");

//*  requete pour obtenir les détails de la descritpion produit *\\
const getproductdetail = async () => {
    productdetail = await fetch(`http://localhost:3000/api/products/${IdProduct}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((detail) => {
            document.title = `${detail.name}`;
            itemImg.innerHTML = `<img src="${detail.imageUrl}" alt="${detail.altTxt}">`;
            title.textContent = `${detail.name}`;
            price.textContent = `${detail.price}`;
            description.textContent = `${detail.description}`;
            detail.colors.forEach((n,i) => {
                colors.innerHTML += `<option value=${detail.colors[i]}>${detail.colors[i]}</option>`
                console.log(detail.colors);
             });
            
        });
};

const details = getproductdetail();

//********** même resultat boucle for  ************//
// for ( let i = 0; i < detail.colors.length; i++ ) {
            //    colors.innerHTML += `<option value="${detail.colors[i]}">${detail.colors[i]}</option>
            //     `
            //     console.log(detail.colors[i]);
            // }