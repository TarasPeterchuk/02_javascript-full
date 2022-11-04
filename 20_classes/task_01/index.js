class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(age) {
    if (age < 0) {
      return false;
    }
    this.age = age;
    if (age >= 25) {
      this.requestNewPhoto();
    }
    return age;
  }
  static createEmpty() {
    return new User('', null);
  }
}

const user1 = new User('Tom', 17);
user1.sayHi();

const user2 = new User('Bob', 21);
user2.sayHi();
user2.requestNewPhoto();
console.log(user2.setAge(25));

const user5 = User.createEmpty();
console.log(user5);
user5.sayHi();
