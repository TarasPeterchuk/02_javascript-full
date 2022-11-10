// calc(3).add(2).mult(4).div(10).subtract(5).result();
const calc = initValue => {
  let result = initValue;

  const calculator = {
    add(val) {
      result += val;
      return this;
    },
    mult(val) {
      result *= val;
      return this;
    },
    mult(val) {
      result *= val;
      return this;
    },
    div(val) {
      result /= val;
      return this;
    },
    subtract(val) {
      result -= val;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};
const result = calc(3).result();
console.log(result);
