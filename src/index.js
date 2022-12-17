import './css/index.scss';

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (let item of this.items) {
      if (product.name === item.name) {
        return (item.quantity += 1);
      }
    }
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
      const { price, quantity } = items[i];
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (name === productName) {
        return (items[i].quantity += 1);
      }
    }
  },
  decreaseQuantity(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (name === productName) {
        if (items[i].quantity === 1) {
          items.splice(i, 1);
          return;
        }

        return (items[i].quantity -= 1);
      }
    }
  },
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'cherry', price: 100 });
// cart.add({ name: 'strawberry', price: 150 });
// console.table(cart.items);
// cart.remove('lemon');
// console.table(cart.items);
console.log('total', cart.countTotalPrice());
cart.increaseQuantity('apple');
cart.increaseQuantity('apple');
cart.increaseQuantity('apple');

console.table(cart.items);

cart.decreaseQuantity('lemon');
cart.decreaseQuantity('lemon');
cart.decreaseQuantity('cherry');
console.table(cart.items);
console.log('total', cart.countTotalPrice());
// cart.clear();
// console.log(cart.items);
