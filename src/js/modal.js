// import onClickBasket from './totalBasket';
import refs from './get-refs';
import onMinusWeigh from './productWeigh';

refs.modalElem.addEventListener('click', onOpenModal);
refs.modalBtn.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onCloseModal);

function onOpenModal(e) {
  e.preventDefault();
  refs.overlay.classList.add('active');
  refs.modal.classList.add('active');
  // refs.minusKg.addEventListener('click', d);
  // refs.minusKg.addEventListener('click', onMinusWeigh);
}

function onCloseModal() {
  refs.modalBasket.innerHTML = '';
  refs.totalSum.innerHTML = '';
  refs.modal.classList.remove('active');
  refs.overlay.classList.remove('active');
}

// function d() {
//   console.log(cart.increaseQuantity('Огірок'));
// }

// const modal = document.querySelector('#order');
// const modalDescription = modal.querySelector('.modal__descr');
// const overlay = document.querySelector('.overlay');

// document.addEventListener('click', event => {
//   const isButtonMini = event.target.matches('.catalog-item .button_mini');

//   if (!isButtonMini) {
//     return;
//   }
//   const parent = event.target.closest('.catalog-item');
//   const subtitle = parent.querySelector('.catalog-item__subtitle');

//   modalDescription.textContent = subtitle.textContent;

//   modal.classList.add('is-visible');
//   overlay.classList.add('is-visible');
// });
