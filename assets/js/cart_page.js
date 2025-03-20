//*---Table  cart PAGE------------------- */

const tBodyElement = document.getElementById("tBody")

const Vapes = [
    {
        name: "NebulaVape",
        price: 12.99,
        total: 25.98,
    },
    {
        name: "VaporRift",
        price: 50.01,
        total: 50.01,
    }, {
        name: "ZenithVapor",
        price: 45.99,
        total: 45.99,
    }, {
        name: "GravityGlide",
        price: 99.99,
        total: 199.99,
    }, {
        name: "VortexVape",
        price: 25.98,
        total: 25.98,
    }
]


function getVapes() {
    Vapes.forEach(vape => {
        tBodyElement.innerHTML += `
            <tr>
                <td><div class="td_first"><img src="../../images/home_se3Photo/home_se3Photo1.webp" alt="">${vape.name}</div></td>
                <td>${vape.price}</td>
                <td><input min="0" value="1" type="number"></td>
                <td>${vape.total}</td>
                <td><i class="fa-solid fa-xmark"></i></td>
            </tr>
        `
    })
}

getVapes()


