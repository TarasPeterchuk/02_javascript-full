export const delay = (delay, callback, context, ...arg) => {
  setTimeout(function () {
    callback.apply(context, arg);
  }, delay);
};

const myFunc = (...arg) => {
  console.log(arg);
  console.log('my func');
};
delay(100, myFunc, 1, 2, 3);
