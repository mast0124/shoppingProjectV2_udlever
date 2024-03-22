const productsEl = document.querySelector(".products");
 
// Anvend fetch til at hente data fra lokal .jsonfil
fetch("./assets/js/watchesJson.json")
  .then((res) => res.json())
  .then((data) => {
    renderArticles(data.watches);
  })
  .catch((err) => console.log("FEJL!", err));
 
function renderArticles(watches) {
  // Her looper vi igennem watches og laver en article for hver!
 
  watches.forEach((product) => {
    console.log("product:", product);
    productsEl.innerHTML += `
      <article class="product">
            <h3 class="product-title">${product.name}</h3>
            <img src="./assets/img/${product.imgUrl}" alt="${product.name}" />
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>            
        </article>
      `;
  });
 
  //   Herunder hapser vi de lavede articles, skaber en knap og sætter ind i de enkelte articles
 
  const currentArticles = productsEl.querySelectorAll("article");
 
 
  currentArticles.forEach((article, index) => {
    // Skab ny knap
    // Skab nyt i
    const newButton = document.createElement("button");
    const newI = document.createElement("i");
 
    // Indsæt tekst i <button>
    newButton.textContent = "Tilføj til kurv";
 
    // Indsæt classes på <i>
    newI.setAttribute("class", "fa-solid");
    newI.classList.add("fa-cart-plus");
    console.log("newI:", newI);
 
    // Sæt eventlistener på knap
 
    newButton.addEventListener("click", () => {
      console.log("Du har købt det her ud - tillykke!");
    });
  // Sæt <i> ind i <button> og sæt <button> ind i <article>
    newButton.append(newI);
    article.append(newButton);
  });
}
 