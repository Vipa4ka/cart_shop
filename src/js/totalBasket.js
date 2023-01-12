import cart from './cart';
import cards from '../card.json';
import cardBasket from '../templates/cardBasket.hbs';
import refs from './get-refs';
import ss from './productWeigh';

refs.modalElem.addEventListener('click', onClickBasket);

function onClickBasket(e) {
  refs.modalBasket.addEventListener('click', onClickOnKg);

  const listCards = renderCards(cart.items);
  const list = document.querySelector('.modal-basket');
  cart.countTotalPrice();
  list.insertAdjacentHTML('afterbegin', listCards);
  refs.totalSum.insertAdjacentHTML('afterbegin', cart.items.total);
}

function onClickOnKg(e) {
  const listProd = e.target.closest('.list-card-basket');
  const nameProd = listProd.querySelector('.name-product-basket').innerHTML;
  const quantityProd = listProd.querySelector('.quantity');
  const sumProd = listProd.querySelector('.sum-basket');
  const pricePros = listProd.querySelector('.price-basket');
  // const quantityCart = cart.increaseQuantity(nameProd);

  console.log(pricePros.innerHTML);
  const quantityCart = cart.increaseQuantity(nameProd);
  // const sumCartTotal = cart.countTotalPrice();

  sumProd.innerHTML = quantityCart * pricePros.innerHTML;
  quantityProd.innerHTML = quantityCart;

  console.log(quantityCart);
  // console.log(sumCartTotal);

  // sumProd.innerHTML = quantityProd.innerHTML * pricePros.innerHTML;
  // console.log(sumProd.innerHTML);
  const sum = quantityProd.innerHTML * cart.items[0].price;
  // console.log(sum);

  const isButtonMini = e.target.matches('.minus');
  // console.log('dsfg');

  // if (!isButtonMini) {
  //   const quantityCart = cart.increaseQuantity(nameProd);
  //   quantityProd.innerHTML = quantityCart;
  // } else {
  //   const quantityCartF = cart.decreaseQuantity(nameProd);
  //   quantityProd.innerHTML = quantityCartF;
  // }
}

function renderCards(img) {
  return img.map(cardBasket).join('');
}

function sasa(w) {
  const isButtonMini = e.target.matches(w);
  if (!isButtonMini) {
  }
  const quantityCart = cart.increaseQuantity(nameProd);
  quantityProd.innerHTML = quantityCart;
}
