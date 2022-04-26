//* recuperer une information précise
let IdProduct = window.location.search.split("?id=").join("");
let itemImg = document.querySelector(".item__img");
// const titleprod = document.getElementById("title");
// const priceprod = document.getElementById("price");
// const descriptionprod = document.getElementById("description");
// let choicecolor = document.getElementById("colors");

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
            for ( let i = 0; i < detail.colors.length; i++ ) {
               colors.innerHTML += `<option value="${detail.colors[i]}">${detail.colors[i]}</option>
                `
                console.log(detail.colors);
            }
            // detail.colors.forEach(([i]) => {
            //     colors.innerHTML += `<option value="${colors[i]}">${colors[i]}</option>`
            //     console.log(detail.colors);
            //  });
            
        });
};

const details = getproductdetail();

// detail.colors.forEach((color) => {
            //     colors.innerHTML = `<option value="${detail.colors}">${detail.colors}</option>
            //     `
            // });

            // for ( let i = 0; i < 1 ; i++ ) {colors.innerHTML = `<option value="${detail.colors}">${detail.colors}</option>
            // `
            //     console.log(detail.colors);
          //   for ( let i = 0; i < 1 ; i++ ){
          //     colors.innerHTML = `<option value="vert">vert</option>
          //     <option value="blanc">blanc</option>`
          // }
