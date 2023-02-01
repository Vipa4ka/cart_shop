import refs from './get-refs';
import cart from './cart';
import total from './totalBasket';

const clear = document.querySelector('.clear-basket');
clear.addEventListener('click', onClickBtnClear);

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
      elem.removeAttribute('disabled');

      elem.classList.add('active-button');
    }
  });
}

function onClickBtnClear(e) {
  cart.clear();
  const modalBasket = document.querySelector('.modal-basket');
  modalBasket.innerHTML = '';
  refs.totalSum.innerHTML = 0;
  clear.disabled = 'true';
  clear.classList.remove('active-button');

  refs.btnCard.forEach(elem => {
    elem.classList.add('active-button');
    elem.removeAttribute('disabled');
  });
}

const removeFunctions = {
  onRemove,
  onClickRemove,
};
export default removeFunctions;
