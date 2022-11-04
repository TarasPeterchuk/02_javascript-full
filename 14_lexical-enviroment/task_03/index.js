let val = 0;
export function add(num) {
  val += num;
}
export function decrease(num) {
  val -= num;
}
export function reset() {
  val = 0;
}
export function getMemo() {
  return val;
}

console.log(val);
add(10);
console.log(val);
decrease(20);
console.log(val);
reset();
console.log(val);
getMemo();
