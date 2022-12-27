import cart from './cart';
import cards from '../card.json';
import cardBasket from '../templates/cardBasket.hbs';
const listBasket = renderBasket(cards);

const list = document.querySelector('.js-product');

const btnBasket = document.querySelector('.total-basket');
btnBasket.addEventListener('click', onClickBasket);

function onClickBasket() {
  for (let i = 0; i < cart.items.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      if (cart.items[i].id === cards[j].id) {
        list.insertAdjacentHTML('afterbegin', listBasket);

        // console.log(cart.items[i].name, cart.items[i].id);
      }
    }
  }
}

function renderBasket(img) {
  console.log(cardBasket);

  // return img.map(cardTpl).join('');
}

// console.log(cart.items);
