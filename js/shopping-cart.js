const form = document.querySelector('.cart-form');

// < =================== submit form =================== >

function order(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;


    console.log(`username: ${username}, email: ${email}, phone: ${phone}, address: ${address}`);

    const products = document.querySelectorAll('.user-order-wrap');

    let order = [];

    for (let i = 0; i < products.length; i++) {
        const product = products[i].children[1];
        const medicine = product.children[0].innerText;
        const price = product.children[1].children[0].innerText;
        const quantity = product.children[2].children.quantity.value;
       
        const result = `{medicine: ${medicine}, price: ${price}, quantity: ${quantity}}`;

        order.push(result);
    };

    console.log(order);
    form.reset();
};

form.addEventListener('submit', order);
