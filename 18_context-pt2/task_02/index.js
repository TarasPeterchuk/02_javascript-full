const wallet = {
  transactions: [5, 7, 5, 3, 7],
  getMax() {
    // return Math.max(...this.transactions);
    return Math.max.apply(null, this.transactions);
  },

  getMin() {
    // return Math.min(...this.transactions);
    return Math.min.apply(null, this.transactions);
  },
};

console.log(wallet.getMax());

console.log(wallet.getMin());
