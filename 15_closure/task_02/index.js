export const createCalculator = () => {
  let val = 0;
  return {
    add(num) {
      val += num;
    },
    decrease(num) {
      val -= num;
    },
    reset() {
      val = 0;
    },
    getMemo() {
      return val;
    },
  };
};

const calc1 = createCalculator();
calc1.add(10);
console.log(calc1.getMemo());

const calc2 = createCalculator();
calc2.decrease(14);
console.log(calc2.getMemo());
calc2.decrease(14);
console.log(calc2.getMemo());
calc2.reset();
console.log(calc2.getMemo());
