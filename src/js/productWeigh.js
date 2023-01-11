import refs from './get-refs';
import cart from './cart';

// if (document.querySelector('.modal').classList.contains('active')) {
//   console.log('dfv');

//   const body = document.querySelector('.minus');
//   body.addEventListener('click', ss);
// } else {
//   console.log('6778');
// }
// ____________________________;

export default function ss(event) {
  const isButtonMini = event.target.matches('.minus');
  if (!isButtonMini) {
    return;
  }
  const parent = event.target.closest('.list-card-basket');
  const subtitle = parent.querySelector('.name-product-basket');
  const nameProduct = subtitle.innerHTML;
  // cart.increaseQuantity(nameProduct);
  console.log(cart.increaseQuantity(nameProduct));
  // console.log(cart.items[0].quantity);
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
