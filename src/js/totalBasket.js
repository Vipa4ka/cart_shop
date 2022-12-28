import cart from './cart';
import cards from '../card.json';
import cardBasket from '../templates/cardBasket.hbs';

const totalSum = document.querySelector('.totalSum');
const modal = document.querySelector('.modal');

export default function onClickBasket() {
  // clearSearch();
  cart.countTotalPrice();

  modal.insertAdjacentHTML('afterbegin', renderBasket(cart.items));
  totalSum.insertAdjacentHTML('afterbegin', cart.items.total);

  console.log(cart.items.total);
}

function renderBasket(img) {
  return img.map(cardBasket).join('');
}

// function clearSearch() {
//   list.innerHTML = '';
// }
