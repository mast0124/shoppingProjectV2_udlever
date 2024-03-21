const productsEl = document.querySelector(".products")


// Anvend fetch til at hente data fra lokal jsonfil

fetch("./assets/js/watchesJson.json")
.then(res => res.json())
.then(watches => {
    console.log(watches);
    renderArticles(watches)
})
.catch(err => console.log("fejl", err, "ost"));

function renderArticles(watches){
    watches.watches.forEach((product) => {
    console.log('product:', product);
    productsEl.innerHTML += `<article class="product">
    <h3 class="product-title">${product.name}</h3>
    <img src="./assets/img/${product.imgUrl}" alt="${product.name}" />
    <p class="product-description">
    ${product.descriiption}
    </p>
    <p class="product-price">${product.price}</p>
  </article>`
  ;

// ny knap

// ny i
const newButton = document.createElement("button");
const newI = document.createElement("i");
// indsæt tekst i <button>
newButton.textContent = "Tilføj til kurv"

// indsæt class på <i>
newI.setAttribute("class", "fa-solid");
newI.classList.add("fa-cart-plus");
console.log("newI:", newI);

// sæt eventlistener på knap
newButton.addEventListener("click", () => {
    console.log("Vi har modtaget din bestilling, tak!");

});

const currentArticles = productsEl.querySelectorAll("article");
// sæt i ind i <button> og sæt <button> ind i <article>
currentArticles.forEach(article, index => {
   
    newButton.append(newI);
    article.append(newButton);

});


    });
}
