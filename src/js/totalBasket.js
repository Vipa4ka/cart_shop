import cart from './cart';
import cardBasket from '../templates/cardBasket.hbs';
import refs from './get-refs';

let quantityCart;
let aaaaa;

refs.modalElem.addEventListener('click', onClickBasket);

function onClickBasket(e) {
  refs.modalBasket.addEventListener('click', onClickOnKg);
  cart.countTotalPrice();

  const listCards = renderCards(cart.items);
  const list = document.querySelector('.modal-basket');

  list.insertAdjacentHTML('afterbegin', listCards);
  // refs.totalSum.insertAdjacentHTML('afterbegin', cart.items.total);
}

function onClickOnKg(e) {
  console.log(cart.items[0].price);
  console.log(cart.items);
  const listProd = e.target.closest('.list-card-basket');
  const nameProd = listProd.querySelector('.name-product-basket').innerHTML;
  const quantityProd = listProd.querySelector('.quantity');
  const sumProd = listProd.querySelector('.sum-basket');
  // cart.amountProd(nameProd);

  const priceProd = listProd.querySelector('.price-basket');

  const isButtonMini = e.target.matches('.minus');

  if (!isButtonMini) {
    quantityCart = cart.increaseQuantity(nameProd);

    quantityProd.innerHTML = quantityCart;
    sumProd.innerHTML = quantityCart * priceProd.innerHTML;

    refs.totalSum = cart.countTotalPrice();
  } else {
    quantityCart = cart.decreaseQuantity(nameProd);

    quantityProd.innerHTML = quantityCart;
    sumProd.innerHTML = quantityCart * priceProd.innerHTML;
  }
}

function renderCards(arrayCart) {
  console.log(arrayCart);

  return arrayCart.map(cardBasket).join('');
}

// function sasa(w) {
//   const isButtonMini = e.target.matches(w);
//   if (!isButtonMini) {
//   }
//   const quantityCart = cart.increaseQuantity(nameProd);
//   quantityProd.innerHTML = quantityCart;
// }
