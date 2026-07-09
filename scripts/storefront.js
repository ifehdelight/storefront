import { products } from "../data/products";

let productHTML = '';
products.forEach((product) => {
    productHTML += `
        <div class="product">
            <div class="product-image-container">
                <img src="${product.image}" alt="product-img" class="product-img" >
            </div>
            <div class="description">
                <span class="name">${product.name}</span>
                <span class="price">$${product.priceCents}</span>
            </div>
            <div class="actions">
                <button type="button">ADD TO CART</button>
                <img src="images/icons/checkmark.png" alt="" width="20">
            </div>
        </div>
    `
})

document.querySelector('.product-grid').innerHTML = productHTML

console.log(productHTML);
