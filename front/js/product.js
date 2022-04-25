//* recuperer une information précise
let IdProduct = window.location.search.split("?id=").join("");
let itemImg = document.querySelector(".item__img");
// const titleprod = document.getElementById("title");
// const priceprod = document.getElementById("price");
// const descriptionprod = document.getElementById("description");
const choicecolor = document.getElementById("colors");

const getproductdetail = async () => {
    productdetail = await fetch(`http://localhost:3000/api/products/${IdProduct}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((detail) => {
            itemImg.innerHTML = `<img src="${detail.imageUrl}" alt="${detail.altTxt}">`;
            title.textContent = `${detail.name}`;
            price.textContent = `${detail.price}`;
            description.textContent = `${detail.description}`;
            document.title = `${detail.name}`;
        });
};

const details = getproductdetail();
