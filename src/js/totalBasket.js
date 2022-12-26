import cart from './cart';
import cards from '../card.json';

const btnBasket = document.querySelector('.total-basket');
btnBasket.addEventListener('click', onClickBasket);

function onClickBasket() {
  for (let i = 0; i < cart.items.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      if (cart.items[i].id === cards[j].id) {
        console.log(cart.items[i].name);
      }
    }
  }
  //   cart.items.map(a => {
  //     cards.map(b => {
  //       return b.id;
  //     });
  //     if (a.id === b.id) {
  //       return a;
  //     }
  //     // console.log(a.id);
  //   });
  //   console.log(cart.items);
  //   return;
}

// console.log(cart.items);
