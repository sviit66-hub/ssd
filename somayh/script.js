let cart = [];

function addToCart(product) {
    cart.push(product);

    let list = document.getElementById("cartList");
    let item = document.createElement("li");
    item.textContent = product;

    list.appendChild(item);
}

function sendMsg(e) {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح 💌");
}