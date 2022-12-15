import './css/index.scss';

cart = {
  item: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear(product) {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'cherry', price: 100 });
cart.add({ name: 'strawberry', price: 150 });
