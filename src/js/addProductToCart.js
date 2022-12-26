import cart from './cart';

const cardSearch = document.querySelectorAll('.list-card');

cardSearch.forEach(elem => {
  elem.addEventListener('click', onclickCard);
});

function onclickCard(e) {
  const elementsId = e.currentTarget.getAttribute('id');
  const elemsName = e.currentTarget.children[1].innerHTML;
  const elemsPrice = e.currentTarget.children[3].innerHTML;
  cart.add({ name: elemsName, price: elemsPrice, id: elementsId });
  //   console.log(cart.items);
}
