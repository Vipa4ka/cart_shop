// import onClickBasket from './totalBasket';
import refs from './get-refs';
refs.modalElem.addEventListener('click', onOpenModal);
refs.modal.addEventListener('click', onCloseModal);
// refs.modalElem.addEventListener('click', onClickBasket);

function onOpenModal(e) {
  e.preventDefault();
  refs.modalElem.classList.add('active');
  refs.overlay.classList.add('active');
  refs.modal.classList.add('active');
}

function onCloseModal() {
  refs.modalBasket.innerHTML = '';
  refs.totalSum.innerHTML = '';
  refs.modal.classList.remove('active');
  refs.modalElem.classList.remove('active');
  refs.overlay.classList.remove('active');
}
