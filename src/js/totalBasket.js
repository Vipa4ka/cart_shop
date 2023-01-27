import cart from './cart';
import cardBasket from '../templates/cardBasket.hbs';
import refs from './get-refs';

let quantityCart;

refs.modalElem.addEventListener('click', onClickBasket);

function onClickBasket(e) {
  refs.totalSum.innerHTML = cart.countTotalPrice();
  refs.modalBasket.addEventListener('click', onClickOnKg);
  const listCards = renderCards(cart.items);
  const list = document.querySelector('.modal-basket');
  list.insertAdjacentHTML('afterbegin', listCards);
}

function onClickOnKg(e) {
  const listProd = e.target.closest('.list-card-basket');
  const nameProd = listProd.querySelector('.name-product-basket').innerHTML;
  const quantityProd = listProd.querySelector('.quantity');
  const sumProd = listProd.querySelector('.sum-basket');
  const priceProd = listProd.querySelector('.price-basket');

  const isButtonMini = e.target.matches('.minus');

  if (!isButtonMini) {
    quantityCart = cart.increaseQuantity(nameProd);
  } else {
    quantityCart = cart.decreaseQuantity(nameProd);
  }
  sumProd.innerHTML = cart.amountProd(nameProd);
  quantityProd.innerHTML = quantityCart;
  refs.totalSum.innerHTML = cart.countTotalPrice();
}

function renderCards(arrayCart) {
  return arrayCart.map(cardBasket).join('');
}
