import refs from './get-refs';
import cart from './cart';
import total from './totalBasket';
import cards from '../card.json';

function onRemove() {
  const remove = document.querySelectorAll('.remove-cart');
  remove.forEach(elem => {
    elem.addEventListener('click', onClickRemove);
  });
}

function onClickRemove(e) {
  const listProds = e.target.closest('.list-card-basket');
  const nameProd = listProds.querySelector('.name-product-basket').innerHTML;
  cart.remove(nameProd);
  total.renderCards();
  total.onClickBasket();
  // let s = [];
  let r = [];
  const s = cards.filter(card => {
    const w = cart.items.filter(el => el.id != card.id);
    console.log('w', w);

    //  cart.items.map(item => {
    //   if (card.id === item.id) {
    //     console.log('item', item);
    //     return item.id;

    //     // s.push(item.id);
    //   }
    // });

    // e.target.setAttribute('disabled', 'true');
    // e.target.classList.remove('active-button');
  });
  console.log('s', s);
  // refs.btnCard.forEach(elem => {
  //   console.log(elem.parentNode.id);
  //   s.map(el => {
  //     if (elem.parentNode.id != el) {
  //       elem.setAttribute('disabled', 'false');
  //       elem.classList.add('active-button');
  //       r.push(elem);
  //     }
  //     console.log('el', el);
  //   });
  // });
  // console.log(s);
  // console.log('r', r);
  // r.map(t => {
  //   console.log('t', t);
  // });

  // refs.btnCard.forEach(elem => {
  //   s.map(el => {
  //     // console.log('el', el);
  //     const r = elem.parentNode.querySelector('.card-button');
  //     if (elem.parentNode.getAttribute('id') === el) {
  //       r.setAttribute('disabled', 'true');
  //       r.classList.remove('active-button');
  //     }
  //     if (elem.parentNode.getAttribute('id') != el) {
  //       r.setAttribute('disabled', 'false');
  //       r.classList.add('active-button');
  //     }
  //   });
  // });
}

const removeFunctions = {
  onRemove,
  onClickRemove,
};
export default removeFunctions;
