import refs from './get-refs';
import cart from './cart';

// export default function plusProduct(event) {
//   const parent = event.target.closest('.list-card-basket');
//   const subtitle = parent.querySelector('.name-product-basket');
//   const nameProduct = subtitle.innerHTML;
//   cart.increaseQuantity(nameProduct);
// }

// refs.body.addEventListener('click', ss);
// _____________________________

export default function ss(event) {
  const isButtonMini = event.target.matches('.minus');
  if (!isButtonMini) {
    return;
  }
  const parent = event.target.closest('.list-card-basket');
  const subtitle = parent.querySelector('.name-product-basket');
  const nameProduct = subtitle.innerHTML;
  cart.increaseQuantity(nameProduct);
  // console.log(cart.increaseQuantity(nameProduct));
}

// ______________________________________
// refs.modalBasket.addEventListener('click', event => {
//   const isButtonMini = event.target.matches('.minus');

//   if (!isButtonMini) {
//     return;
//   }
//   const parent = event.target.closest('.list-card-basket');
//   const subtitle = parent.querySelector('.name-product-basket');
//   const nameProduct = subtitle.innerHTML;

//   //   quantity= cart.increaseQuantity(nameProduct);
//   //   console.log(cart.increaseQuantity(nameProduct));
//   // return cart.increaseQuantity('Огірок');

//   cart.increaseQuantity(nameProduct);
// });
