const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    for (let item of this.items) {
      if (product.name === item.name) {
        item.quantity += 1;
        item.total += item.price;

        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
      // total: ,
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
    let totalBasket = 0;

    for (let i = 0; i < items.length; i += 1) {
      const { price, quantity } = items[i];
      totalBasket += price * quantity;
    }

    return (items.allTotal = totalBasket);
  },

  increaseQuantity(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (name === productName) {
        // items[i].total += items[i].price;
        return (items[i].quantity += 1);
      }
    }
  },

  decreaseQuantity(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (name === productName) {
        if (items[i].quantity === 0) {
          return (items[i].quantity = 0);
        }

        return (items[i].quantity -= 1);
      }
    }
  },
  // amountProd(productName) {
  //   const { items } = this;

  //   for (let i = 0; i < items.length; i += 1) {
  //     const { name } = items[i];
  //     console.log('name', name);
  //     console.log('productName', productName);

  //     if (name === productName) {
  //       console.log('total', items[i].total);
  //       console.log('quantity', items[i].quantity);

  //       return (items[i].total = items[i].quantity * items[i].price);
  //     }
  //   }
  //   // console.log(items);
  // },
};

export default cart;

// console.log(nameProduct);
// cart.add({ name: nameProduct, price: priceProduct });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'cherry', price: 100 });
// cart.add({ name: 'strawberry', price: 150 });
// console.table(cart.items);
// cart.remove('lemon');
// console.table(cart.items);

// console.log('total', cart.countTotalPrice());
// cart.increaseQuantity('apple');
// cart.increaseQuantity('apple');
// cart.increaseQuantity('apple');

// console.table(cart.items);

// cart.decreaseQuantity('lemon');
// cart.decreaseQuantity('lemon');
// cart.decreaseQuantity('cherry');
// console.table(cart.items);
// console.log('total', cart.countTotalPrice());
// cart.clear();
// console.log(cart.items);
