let header = document.getElementById("header");

header.innerHTML = `
    <nav>
        <div class="title-menu">
            <div class="menu" id="menu">
                <i class="fa-solid fa-bars"></i>
            </div>

            <h2>ADIDAS</h2>
        </div>

        <ul>
            <li><a href="index.html#home" class="after1">home</a></li>
            <li><a href="index.html#women" class="after1">women</a></li>
            <li><a href="index.html#men" class="after1">men</a></li>
            <li><a href="index.html#sports" class="after2 last-h">sports</a></li>
            <li>
                <a href="cart_details.html" class="cart">
                    <i class="fa-solid fa-cart-shopping fa-lg">
                        <span class="cart-count"></span>
                    </i>
                </a>
            </li>
        </ul>
    </nav>
`;

let cartCount = document.querySelector(".cart-count");

let showProductsCount = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartCount.style.display = "none";
    } else {
        cartCount.style.display = "inline";
        cartCount.textContent = cart.length;
    }
}

showProductsCount();

// ============== Menu ==============

let menu = document.getElementById("menu");
let menuUl = document.querySelector("nav ul");

let showMenu = () => {
    menuUl.classList.toggle("show-menu");
}

menu.addEventListener("click" , showMenu);