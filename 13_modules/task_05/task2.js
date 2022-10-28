export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] >= amount) {
    balances[clientIndex] -= amount;
    return balances[clientIndex];
  } else {
    return -1;
  }
};
