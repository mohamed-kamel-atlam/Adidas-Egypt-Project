let productsDB = [];
let pageName = window.location.pathname;

if (pageName.includes("women")) {
  productsDB = womanShoesDB;
} else if (pageName.includes("men")) {
  productsDB = menShoesDB;
} else if (pageName.includes("sports")) {
  productsDB = sportShoesDB;
} else {
  productsDB = [];
}

function productsUI(products) {
  let myProducts = document.querySelector(".cards");

  let nowProducts = products.map((item) => {
    return `
            <div class="card">
                <img src="${item.imageUrl}" alt="woman image">
                <h5>${item.title}</h5>
                <p>${item.price}$</p>
                <button class="custom-btn btn-3" id="${item.id}"><span>add to cart</span></button>
            </div>
        `;
  });

  myProducts.innerHTML += nowProducts.join("");
}

productsUI(productsDB);

// addToCart
let allProducts = [...womanShoesDB, ...menShoesDB, ...sportShoesDB];

let addToCart = document.querySelectorAll(".custom-btn");
let cart;
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
} else {
  cart = [];
}

addToCart.forEach((item) => {
  let product = allProducts[item.id - 1];
  let ID = product.id;
  item.addEventListener("click", (id) => {
    id = ID;
    let productChoosed = cart.find((i) => i.id == id);
    if (productChoosed) {
      let cartId = item.id;
      let cartProduct = cart.filter((i) => i.id == cartId);
      cartProduct[0].qnt++;
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  item.addEventListener("click", showProductsCount);
});
