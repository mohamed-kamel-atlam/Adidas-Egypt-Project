let mainContent = document.getElementById("main-cart");
let productsCart = document.querySelector(".products-cart");
let tableBody = document.getElementById("table-body");
let total = document.querySelector(".total-price");
let noProduct = document.getElementById("no-product");

let showCartDetailsUI = () => {
    let cartDetails = JSON.parse(localStorage.getItem("cart")) || [];
    if(cartDetails.length === 0 || cartDetails == null) {
        mainContent.style.display = "none";
        noProduct.style.display = "block";
    }

    let productPart = [];
    let tableBodyPart = [];
    let totalPart = 0;

    let totalAll = 0;
    cartDetails.map((product) => {
        let totalPrice = Number(product.price) * Number(product.qnt);
        totalAll += totalPrice;

        productPart.push(`
            <div class="product-item-cart">
                <img src="${product.imageUrl}" alt="product">
                <div class="product-item-details">
                    <h2>${product.title}</h2>
                    <p>price: ${product.price}$</p>
                    <span>quantity: ${product.qnt}</span>
                    <h4>total: ${totalPrice}$</h4>
                    <button onclick="removeProduct(${product.id})">Remove</button>
                </div>
            </div>
        `);

        tableBodyPart.push(`
            <tr>
                <td>${product.title}</td>
                <td>${product.qnt}</td>
                <td>${totalPrice}$</td>
            </tr>
        `);

        totalPart = (`
            <span>Total Price : ${totalAll}$</span>
        `)
    });
    
    let productHtml = productPart;
    let invoiceHtml = tableBodyPart;
    let totalHtml = totalPart;
    
    productsCart.innerHTML = productHtml.join("");
    tableBody.innerHTML = invoiceHtml.join("");
    total.innerHTML = totalHtml;
}

showCartDetailsUI();

// Remove Button
let removeProduct = (id) => {
    let cartDetails = JSON.parse(localStorage.getItem("cart")) || [];
    let cartFilter = cartDetails.filter((i) => i.id != id);
    localStorage.setItem("cart" , JSON.stringify(cartFilter));
    showCartDetailsUI();
    showProductsCount();
}