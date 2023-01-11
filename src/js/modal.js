import refs from './get-refs';
// import plusProduct from './productWeigh';
import cart from './cart';
import ss from './productWeigh';

refs.modalElem.addEventListener('click', onOpenModal);
refs.modalBtn.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onCloseModal);

function onOpenModal(e) {
  e.preventDefault();
  refs.overlay.classList.add('active');
  refs.modal.classList.add('active');

  // const minusKg = document.querySelectorAll('.minus');
  // minusKg.forEach(elem => elem.addEventListener('click', plusProduct));
}

function onCloseModal() {
  refs.modalBasket.innerHTML = '';
  refs.totalSum.innerHTML = '';
  refs.modal.classList.remove('active');
  refs.overlay.classList.remove('active');
}
