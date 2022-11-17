export const parseUser = str => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return null;
  }
};

const user = `[{
    "id": 172581071,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNzI1ODEwNzE=",
    "name": ".github",
    "full_name": "facebook/.github",
    "private": false
  }]`;

console.log(parseUser(user));
