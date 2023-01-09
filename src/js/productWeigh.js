import refs from './get-refs';
import cart from './cart';

// refs.minusKg.addEventListener('click', onMinusWeigh);

// export default function onMinusWeigh(e) {
//   console.log(e);

//   //   console.log(cart.decreaseQuantity('Огірок'));
//   //   cart.decreaseQuantity;
// }

//   refs.modalBasket.insertAdjacentHTML('afterbegin', renderBasket(cart.items));

refs.modalBasket.addEventListener('click', event => {
  const isButtonMini = event.target.matches('.minus');

  if (!isButtonMini) {
    return;
  }
  const parent = event.target.closest('.list-card-basket');
  const subtitle = parent.querySelector('.name-product-basket');
  const nameProduct = subtitle.innerHTML;
  console.log(nameProduct);
  // console.log((cart.items[0].quantity = cart.increaseQuantity(nameProduct)));

  //   return (cart.items[0].quantity = cart.increaseQuantity(nameProduct));

  //   quantity= cart.increaseQuantity(nameProduct);
  //   console.log(cart.increaseQuantity(nameProduct));
  return cart.increaseQuantity(nameProduct);
});
