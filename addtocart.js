const products = [
  {
    id: 0,
    image: 'image/10UNITES.jpg',
    title: 'Eponges 10 unites',
    price: 42,
  },
  {
    id: 1,
    image: 'image/24UNITES.jpg',
    title: 'Eponges 20 unites',
    price: 81,
  },
  {
    id: 2,
    image: 'image/30UNITES.jpg',
    title: 'Eponges 30 unites',
    price: 120,
  },
];

const categories = [...new Set(products.map((item) => item))];
let total = 0;
let i = 0;

document.getElementById('root').innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    total = total + price;
    document.getElementById('total').innerHTML = '$ ' + total + '.00';
    return `
        <div class='box'>
            <div class="img-box">
                <img class='image' src="${image}"></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00 MAD</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>
    `;
  })
  .join('');

var cart = [];
function addtocart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}
function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

function displayCart() {
  let j = 0;
  total = 0;
  document.getElementById('count').innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = 'Your cart is empty';
    document.getElementById('total').innerHTML = '$ ' + 0 + '.00';
  } else {
    document.getElementById('cartItem').innerHTML = cart
      .map((item) => {
        var { image, title, price } = item;
        return `
            <div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
            </div>`;
      })
      .join('');
  }
}