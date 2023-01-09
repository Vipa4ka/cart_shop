import cart from './cart';
import cardBasket from '../templates/cardBasket.hbs';
import refs from './get-refs';

refs.modalElem.addEventListener('click', onClickBasket);

function onClickBasket(e) {
  cart.countTotalPrice();
  // console.log(cart.increaseQuantity('Огірок'));

  // cart.increaseQuantity();
  refs.modalBasket.insertAdjacentHTML('afterbegin', renderBasket(cart.items));
  refs.totalSum.insertAdjacentHTML('afterbegin', cart.items.total);

  // refs.modalBasket.addEventListener('click', event => {
  //   const isButtonMini = event.target.matches('.minus');

  //   if (!isButtonMini) {
  //     return;
  //   }
  //   const parent = event.target.closest('.list-card-basket');
  //   const subtitle = parent.querySelector('.name-product-basket');
  //   const nameProduct = subtitle.innerHTML;
  //   console.log(nameProduct);

  // console.log(nameProduct);

  // cart.increaseQuantity(nameProduct);
  // return cart.increaseQuantity('Огірок');

  // console.log(cart.increaseQuantity('Огірок'));
  //   console.log(subtitle.innerHTML);
  // });

  // refs.minusKg.addEventListener('click', d);
}

function renderBasket(cart) {
  return cart.map(cardBasket).join('');
}

// function d() {
//   console.log(cart.increaseQuantity('Огірок'));
// }
