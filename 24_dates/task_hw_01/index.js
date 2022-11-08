const getDiff = (startDate, endDate) => {
  const totalSeconds = Math.floor(Math.abs((startDate - endDate) / 1000));
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalSeconds / (60 * 60));
  let totalDays = Math.floor(totalSeconds / (60 * 60 * 24));
  let hours = totalHours - totalDays * 24;
  let minutes = totalMinutes - totalDays * 24 * 60 - hours * 60;
  let seconds = totalSeconds - totalDays * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  return `${totalDays}d ${hours}h ${minutes}m ${seconds}s`;
};
const startDate = new Date();
const endDate = new Date(2022, 5, 3, 12);
console.log(getDiff(startDate, endDate));
