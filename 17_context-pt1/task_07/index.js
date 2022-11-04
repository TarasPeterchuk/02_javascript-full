const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(name) {
    this.firstName = name.split(' ')[0];
    this.lastName = name.split(' ')[1];
  },
};

console.log(user.getFullName());
user.setFullName('Taras Peterchuk');
console.log(user.getFullName());
