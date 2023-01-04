import cart from './cart';
import cardBasket from '../templates/cardBasket.hbs';
import refs from './get-refs';

refs.modalElem.addEventListener('click', onClickBasket);

function onClickBasket() {
  cart.countTotalPrice();
  refs.modalBasket.insertAdjacentHTML('afterbegin', renderBasket(cart.items));
  refs.totalSum.insertAdjacentHTML('afterbegin', cart.items.total);
}

function renderBasket(cart) {
  return cart.map(cardBasket).join('');
}
