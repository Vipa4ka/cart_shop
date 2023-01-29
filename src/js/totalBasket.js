import cart from './cart';
import cardBasket from '../templates/cardBasket.hbs';
import refs from './get-refs';

let quantityCart;

refs.modalElem.addEventListener('click', onClickBasket);

function onClickBasket(e) {
  refs.totalSum.innerHTML = cart.countTotalPrice();
  const listCards = renderCards(cart.items);
  const list = document.querySelector('.modal-basket');
  list.insertAdjacentHTML('afterbegin', listCards);
  const btnProg = document.querySelectorAll('.button-progress');
  btnProg.forEach(elem => {
    elem.addEventListener('click', onClickProgress);
  });
}

function onClickProgress(e) {
  const listProd = e.target.closest('.list-card-basket');
  const nameProd = listProd.querySelector('.name-product-basket').innerHTML;
  const sumProd = listProd.querySelector('.sum-basket');
  const isButtonMinus = e.target.matches('.minus');
  const isButtonPlus = e.target.matches('.plus');
  const quantityProd = listProd.querySelector('.quantity');

  if (isButtonPlus) {
    quantityCart = cart.increaseQuantity(nameProd);
    quantityProd.innerHTML = quantityCart;
  }

  if (isButtonMinus) {
    quantityCart = cart.decreaseQuantity(nameProd);
    quantityProd.innerHTML = quantityCart;
  }
  sumProd.innerHTML = cart.amountProd(nameProd);

  refs.totalSum.innerHTML = cart.countTotalPrice();
}

function renderCards(arrayCart) {
  return arrayCart.map(cardBasket).join('');
}
