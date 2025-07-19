import Product  from "./data.js"
const cartContainer = document.getElementById('cart-container')
const productsContainer = document.getElementById('products-container')
const dessertCards = document.getElementById('dessert-card-container')
const cartBtn = document.getElementById('cart-btn')
const clearCartBtn = document.getElementById('clear-cart-btn')
const totalNumberOfItems = document.getElementById('total-items')
const cartSubTotal = document.getElementById('subtotal')
const cartTaxes = document.getElementById('taxes')
const cartTotal = document.getElementById('total')
const showHideCartSpan = document.getElementById('show-hide-cart')

let isCartShowing = false;

const products = Product;
products.forEach(
     ({name, id, price, category})=>{
  dessertCards.innerHTML+=`<div class="dessert-card">
     <h2>${name}</h2>
     <p class="dessert-price">$${price}</p>
<p class="product-category">Category: ${category}</p>
<button id="${id}" class="btn add-to-cart-btn">Add to cart</button>
</div>`
})
class ShoppingCart {
     constructor() {
     this.items = [],
     this.total = 0,
     this.taxRate = 8.25
     }
     addItem(id,products){
          const product  = products.find((item)=>item.id === id)
          const {name,price}=product
          this.items.push(product)
          const totalCountPerProduct = {}
          this.items.forEach(dessert=>{
               totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id]|| 0) + 1
          })
          const currentProductCount = totalCountPerProduct[product.id];
          const currentProductCountSpan =document.getElementById(`product-count-for-id${product.id}`) ;
          
           currentProductCount > 1 ?   currentProductCountSpan.textContent =`${currentProductCount}x`: productsContainer.innerHTML += `<div class="product" id="dessert${id}"><p><span class="product-count" id="product-count-for-id${id}"></span>${name}</p><p>${price}</p></div>`;
     }
}