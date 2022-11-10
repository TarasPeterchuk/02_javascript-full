const shmoment = initValue => {
  let result = initValue;

  const periodsCalc = {
    years: function (date, value, operator) {
      return new Date(date.setFullYear(date.getFullYear() + value));
    },
    months: function (date, value) {
      return new Date(date.setMonth(date.getMonth() + value));
    },
    days: function (date, value) {
      return new Date(date.setDate(date.getDate() + value));
    },
    hours: function (date, value) {
      return new Date(date.setHours(date.getHours() + value));
    },
    minutes: function (date, value) {
      return new Date(date.setMinutes(date.getMinutes() + value));
    },
    seconds: function (date, value) {
      return new Date(date.setSeconds(date.getSeconds() + value));
    },
    milliseconds: function (date, value) {
      return new Date(date.setTime(date.getTime() + value));
    },
  };

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
      // console.log(periods[period][0]);
      result[periods[period][0]](result[periods[period][1]]() + val);
      return this;
    },
    subtract(period, val) {
      result[periods[period][0]](result[periods[period][1]]() - val);
      return this;
    },
    result() {
      return new Date(result);
    },
  };
  return timeCalculator;
};

const usedDate = new Date(2020, 0, 7, 17, 17, 17);
console.log(usedDate);
console.log(shmoment(usedDate).add('months', 1).add('years', 40).subtract('years', 13).result());
