import refs from './get-refs';
import cart from './cart';
import total from './totalBasket';

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

  refs.btnCard.forEach(elem => {
    if (elem.parentNode.id === listProds.id) {
      elem.disabled = 'false';
      elem.classList.add('active-button');
    }
  });
}

const clear = document.querySelector('.clear-basket');
clear.addEventListener('click', onClickBtnClear);
function onClickBtnClear(e) {
  console.log('item', cart.items);
  cart.clear();
  console.log('item', cart.items);
  total.renderCards();
}

const removeFunctions = {
  onRemove,
  onClickRemove,
};
export default removeFunctions;
