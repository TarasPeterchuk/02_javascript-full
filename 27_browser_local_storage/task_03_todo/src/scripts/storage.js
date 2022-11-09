// export const tasks = [
//   { text: 'Buy milk', done: false },
//   { text: 'Pick up Tom from airport', done: false },
//   { text: 'Visit party', done: false },
//   { text: 'Visit doctor', done: true },
//   { text: 'Buy meat', done: true },
// ];

const storage = {};

export const setItem = (key, value) => {
  Object.assign(storage, { [key]: value });
};

export const getItem = key => storage[key];
