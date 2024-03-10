const SHOPS_1 = document.getElementById(1);
const SHOPS_2 = document.getElementById(2);
const SHOPS_3 = document.getElementById(3);
const SHOPS_4 = document.getElementById(4);
const SHOPS_5 = document.getElementById(5);

const PRODUCTS = document.querySelector('.product-cards-list');

const URL_SHOPS = 'https://65ec3e490ddee626c9afcf03.mockapi.io/shops/';
const URL_MEDICINES = 'https://65ec3e490ddee626c9afcf03.mockapi.io/medicines/';

// < =================== product-cards =================== >

async function searchProducts() {
    try {
        const response = await fetch(URL_MEDICINES);
        const medicines = await response.json();
        return medicines;      
    } catch (error) {
        console.error("Error:", error);
    };    
};

let medicinesList = [];

function markUpProducts() {
    searchProducts()
        .then((res) => {
            medicinesList = res;
            return medicinesList;
        })
        .then((products) => {
            const result = products.map((product) =>
                `<li class="product-card" id=${product.id}>
                <img src="${product.img}" alt="${product.descriptions}" width="264" height="120" />
                <div class="product-card-info">
                  <h2>${product.name}</h2>
                  <h2>${product.price}</h2>
                  <button class="product-card-btn" type="button">
                    add to Cart
                  </button>
                </div>
              </li>`)
                .join('');
            PRODUCTS.innerHTML = '';
            return PRODUCTS.insertAdjacentHTML('beforeend', result);
        });
};

SHOPS_1.addEventListener('click', markUpProducts);
SHOPS_2.addEventListener('click', markUpProducts);
SHOPS_3.addEventListener('click', markUpProducts);
SHOPS_4.addEventListener('click', markUpProducts);
SHOPS_5.addEventListener('click', markUpProducts);