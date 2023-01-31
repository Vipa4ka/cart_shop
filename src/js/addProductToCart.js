import refs from './get-refs';
import cart from './cart';
import cards from '../card.json';

refs.btnCard.forEach(elem => {
  elem.addEventListener('click', onclickCard);
});

function onclickCard(e) {
  e.target.setAttribute('disabled', 'true');
  e.target.classList.remove('active-button');

  const listCard = e.currentTarget.parentNode;
  const elementsId = listCard.getAttribute('id');
  const elemsName = listCard.children[1].innerHTML;
  const elemsPrice = listCard.children[3].innerHTML;
  const elemsImage = listCard.children[0].src;

  cart.add({
    name: elemsName,
    price: elemsPrice,
    id: elementsId,
    image: elemsImage,
    total: elemsPrice,
  });

  // cards.map(card => {
  //   cart.items.map(item => {
  //     if (card.id === item.id) {
  //       e.target.setAttribute('disabled', 'true');
  //       e.target.classList.remove('active-button');
  //     }
  //   });
  // });
}
