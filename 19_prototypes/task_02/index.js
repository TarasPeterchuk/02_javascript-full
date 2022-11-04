const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

vehicle.move();
vehicle.stop();

const ship = {
  class: 'victory',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  // __proto__: vehicle,
};
Object.setPrototypeOf(ship, vehicle);

ship.startMachine();
ship.stopMachine();

for (let prop in ship) {
  if (ship.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

console.log(Object.keys(ship));

//  TASK :

// function getOwnProps1(obj) {
//   return Object.getOwnPropertyNames(obj);
// }
// console.log(getOwnProps1(ship));

// let methods = [];
// for (let m in ship) {
//   console.log(typeof ship[m]);
//   // if (typeof ship[m] == 'function') {
//   //   methods.push(m);
//   // }
// }
// console.log(methods.join(','));

// for (let prop in ship) {
//   if (Object.hasOwn(ship, prop)) console.log(prop);
// }
// console.log(Object.keys(ship));

// function getOwnProps(obj) {
//   return Object.getOwnPropertyNames(obj).filter(function (property) {
//     return typeof obj[property] == 'function';
//   });
// }

function getOwnProps(obj) {
  let properties = [];
  for (let m in obj) {
    if (obj.hasOwnProperty(m) && typeof obj[m] !== 'function') {
      properties.push(m);
    }
  }
  return properties;
}
console.log(getOwnProps(ship));
