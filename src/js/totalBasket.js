import cart from './cart';
import cardBasket from '../templates/cardBasket.hbs';
import refs from './get-refs';
import ss from './productWeigh';

refs.modalElem.addEventListener('click', onClickBasket);

function onClickBasket(e) {
  cart.countTotalPrice();

  const listCard = e.currentTarget.closest('.list-card-basket');
  const listCard2 = e.target.closest('.list-card-basket');

  // console.log(elemsName1);
  refs.modalBasket.addEventListener('click', onClickMinus);
  refs.modalBasket.insertAdjacentHTML('afterbegin', renderBasket(cart.items));
  refs.totalSum.insertAdjacentHTML('afterbegin', cart.items.total);

  // const isButtonMini = e.currentTarget.matches('.minus');
  // // console.log(listCard);
  // console.log(isButtonMini);
}

function onClickMinus(e) {
  if (e.target.matches('.minus')) {
    console.log('fdvbgn');

    // refs.modalBasket.insertAdjacentHTML(
    //   'afterbegin',
    //   renderBasket(
    //     cart.increaseQuantity(
    //       e.currentTarget.children[0].children[1].innerText,
    //     ),
    //   ),
    // );
  }

  // console.log(e.currentTarget.parentNode);

  // console.log(e.path[1].innerText);
}
function renderBasket(cart) {
  return cart.map(cardBasket).join('');
}
