import './css/index.scss';

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;
    for (let i = 0; i < items.length; i += 1) {
      const { price } = items[i];
      total += price;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'cherry', price: 100 });
// cart.add({ name: 'strawberry', price: 150 });
console.table(cart.items);
// cart.remove('lemon');
console.table(cart.items);
console.log(cart.countTotalPrice());

// cart.clear();
// console.log(cart.items);
