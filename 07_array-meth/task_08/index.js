const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] >= amount) {
    balances[clientIndex] -= amount;
    return balances[clientIndex];
  } else {
    return -1;
  }
};
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// function withdraw(clients, balances, client, amount) {
//   let clientIndex;
//   for (let i = 0; i < clients.length; i += 1) {
//     if (client === clients[i]) {
//       clientIndex = i;
//     }
//   }
//   if (balances[clientIndex] >= amount) {
//     balances[clientIndex] -= amount;
//     return balances[clientIndex];
//   } else {
//     return -1;
//   }
// }
