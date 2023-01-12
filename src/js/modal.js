import refs from './get-refs';

refs.modalElem.addEventListener('click', onOpenModal);
refs.modalBtn.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onCloseModal);

function onOpenModal(e) {
  e.preventDefault();
  refs.overlay.classList.add('active');
  refs.modal.classList.add('active');
}

function onCloseModal() {
  refs.modalBasket.innerHTML = '';
  refs.totalSum.innerHTML = '';
  refs.modal.classList.remove('active');
  refs.overlay.classList.remove('active');
}
