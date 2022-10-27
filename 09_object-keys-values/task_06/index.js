const getPeople = obj => {
  const names = Object.values(obj);
  const flat = names.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return flat.map(val => val.name);
};

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
console.log(getPeople(rooms));
