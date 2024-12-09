// Product list with custom images
const products = [
    { id: 1, name: "Product A", image: "images/product-a.jpg" },
    { id: 2, name: "Product B", image: "images/product-b.jpg" },
    { id: 3, name: "Product C", image: "images/product-c.jpg" },
    { id: 4, name: "Product D", image: "images/product-d.jpg" },
    { id: 5, name: "Product E", image: "images/product-e.jpg" },
];

// Render product cards
const productList = document.getElementById("product-list");
products.forEach(product => {
    // Create product card
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // Add image
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    productCard.appendChild(productImage);

    // Add name
    const productName = document.createElement("p");
    productName.textContent = product.name;
    productCard.appendChild(productName);

    // Add click event for selection
    productCard.addEventListener("click", () => {
        productCard.classList.toggle("selected");
    });

    productList.appendChild(productCard);
});

// Handle button click to show selected products
const showSelectionButton = document.getElementById("show-selection");
showSelectionButton.addEventListener("click", () => {
    const selectedProducts = document.querySelectorAll(".product-card.selected");
    const selectedList = document.getElementById("selected-list");
    const selectedProductsDiv = document.getElementById("selected-products");

    // Clear existing list
    selectedList.innerHTML = "";

    // Add selected products to the list
    selectedProducts.forEach(productCard => {
        const listItem = document.createElement("li");
        listItem.textContent = productCard.querySelector("p").textContent; // Get the name of the product
        selectedList.appendChild(listItem);
    });

    // Show or hide the selected products section
    selectedProductsDiv.style.display = selectedProducts.length ? "block" : "none";
});
