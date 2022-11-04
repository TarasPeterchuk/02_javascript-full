class Order {
  constructor(price, city, type) {
    this.id = this.generateRandomId();
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = false;
    this.dateCreated = new Date();
    this.dateConfirmed = '';
  }
  checkPrice() {
    if (this.price > 1000) {
      return true;
    } else {
      return false;
    }
  }
  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
    }
    this.dateConfirmed = new Date();
  }
  isValidType() {
    let validType = ['Buy', 'Sell'];
    if (validType.indexOf(this.type) === -1) {
      return false;
    } else {
      return true;
    }
  }
  generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
const order1 = new Order(101, 'Lutsk', 'Buy');
console.log(order1);
// console.log(order1.checkPrice());
// console.log(order1.confirmOrder());
const order2 = new Order(222, 'kiev');
console.log(order2);
console.log(order1.isValidType());
