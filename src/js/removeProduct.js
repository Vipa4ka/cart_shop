import refs from './get-refs';
import cart from './cart';
import total from './totalBasket';

export default function onRemove() {
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
}
