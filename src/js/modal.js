import onClickBasket from './totalBasket';

const modalElem = document.querySelector('.js-open-modal');
const overlay = document.querySelector('#overlay-modal');
const modal = document.querySelector('.modal');
modalElem.addEventListener('click', onOpenModal);
modal.addEventListener('click', onCloseModal);
const btnBasket = document.querySelector('.total-basket');
btnBasket.addEventListener('click', onClickBasket);

function onOpenModal(e) {
  e.preventDefault();
  modalElem.classList.add('active');
  overlay.classList.add('active');
  modal.classList.add('active');
}

function onCloseModal() {
  modal.classList.remove('active');
  modalElem.classList.remove('active');
  overlay.classList.remove('active');
}
