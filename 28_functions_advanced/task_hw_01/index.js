export const shmoment = initValue => {
  let result = new Date(initValue);

  const periods = {
    years: ['setFullYear', 'getFullYear'],
    months: ['setMonth', 'getMonth'],
    days: ['setDate', 'getDate'],
    hours: ['setHours', 'getHours'],
    minutes: ['setMinutes', 'getMinutes'],
    seconds: ['setSeconds', 'getSeconds'],
    milliseconds: ['setTime', 'getTime'],
  };

  const timeCalculator = {
    add(period, val) {
      result[periods[period][0]](result[periods[period][1]]() + val);
      return this;
    },
    subtract(period, val) {
      result[periods[period][0]](result[periods[period][1]]() - val);
      return this;
    },
    result() {
      return result;
    },
  };
  return timeCalculator;
};

const usedDate = new Date(2020, 0, 7, 17, 17, 17);
console.log(usedDate);
console.log(shmoment(usedDate).add('months', 1).add('years', 40).subtract('years', 13).result());
console.log(usedDate);
