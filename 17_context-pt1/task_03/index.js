// defer(func, ms)

function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const sayHi = () => {
  console.log('HI');
};
const sum = (a, b) => {
  console.log(a + b);
};

const deferredSayHi = defer(sayHi, 1000);
deferredSayHi();

const deferredSum = defer(sum, 1000);
deferredSum(1, 4);

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};
const deferredUser = defer(user.sayHi, 1000);
deferredUser();
deferredUser.call({ name: 'bob' });
