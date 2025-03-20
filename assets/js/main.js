//*---FETCH PRODUCTS------------------- */


const cartElement = document.getElementById("carts")

const products = [
    {
        name: "Menthol E-Cigarette Kit",
        pricePrev: "74.50",
        priceNext: "49.50"
    },
    {
        name: "GeekVape Obelisk Pod",
        pricePrev: "89.00",
        priceNext: "59.50"
    },
    {
        name: "Disposable Sub-Ohm Tank",
        pricePrev: "55.50",
        priceNext: "30.00"
    },
    {
        name: "POP Extra Strawberry",
        pricePrev: "110.00",
        priceNext: "85.99"
    },
    {
        name: "Battery And Charger Kit",
        pricePrev: "60.90",
        priceNext: "39.50"
    },
    {
        name: "Pods Sold Separately",
        pricePrev: "79.50",
        priceNext: "55.50"
    },
    {
        name: "POP Extra WaterMelon",
        pricePrev: "99.50",
        priceNext: "65.50"
    },
    {
        name: "100ml Nic Salt Juice",
        pricePrev: "125.50",
        priceNext: "100.00"
    }
]

function getDataShop() {
    products.forEach((product => {
        cartElement.innerHTML += `
            <div class="card">
                <a href="./assets/html/pages/shopSingle.html">
                    <img class="img1" src="./assets/images/home_se3Photo/home_se3Photo1.webp" alt="">
                </a>
                <a href="./assets/html/pages/shopSingle.html">
                    <img class="img2" src="./assets/images/home_se3Photo/home_se3photo2.png" alt="">
                </a>
                <div class="card_content">
                    <a href="./assets/html/pages/shopSingle.html">
                        <h3>${product.name}</h3>
                    </a>
                    <div class="price">
                        <p>$${product.pricePrev}</p>
                        <p>$${product.priceNext}</p>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <button class="card_btn"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
            </div>
        `
    }))
}

getDataShop();

