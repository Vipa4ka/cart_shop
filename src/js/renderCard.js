import cards from '../card.json';
import cardTpl from '../templates/cards.hbs';

const listCards = renderCards(cards);
const list = document.querySelector('.js-product');

list.insertAdjacentHTML('afterbegin', listCards);
function renderCards(img) {
  return img.map(cardTpl).join('');
}
