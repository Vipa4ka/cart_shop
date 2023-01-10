import cart from './cart';
import cardBasket from '../templates/cardBasket.hbs';
import refs from './get-refs';
import ss from './productWeigh';

refs.modalElem.addEventListener('click', onClickBasket);

function onClickBasket(e) {
  cart.countTotalPrice();
  const body = document.querySelector('body');
  body.addEventListener('click', ss);

  // console.log(cart.increaseQuantity('Огірок'));

  refs.modalBasket.insertAdjacentHTML('afterbegin', renderBasket(cart.items));
  refs.totalSum.insertAdjacentHTML('afterbegin', cart.items.total);

  // console.log(cart.items[0].quantity);

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
