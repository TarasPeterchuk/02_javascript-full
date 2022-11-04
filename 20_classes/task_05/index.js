/* eslint-disable max-classes-per-file */

class User {
  constructor(userId, userName, userSessionId) {
    this.userId = userId;
    this.userName = userName;
    this.userSessionId = userSessionId;
  }
  get name() {
    return this.userName;
  }
  get id() {
    return this.userId;
  }
  get sessionId() {
    return this.userSessionId;
  }
}

class UserRepository {
  constructor(users) {
    this.usersArray = users;
    Object.freeze(this.usersArray);
  }
  get users() {
    return this.usersArray;
  }
  getUserNames() {
    return this.usersArray.map(el => el.userName);
  }
  getUserIds() {
    return this.usersArray.map(el => el.userId);
  }
  getUserNameById(id) {
    return this.usersArray.find(el => el.userId === id).userName;
  }
}

// examples
const user1 = new User('1', 'Tom', 'session-id');
console.log(user1);
// получить свойства можем
console.log(user1.id); // ===> '1'
console.log(user1.name); // ===> 'Tom'
console.log(user1.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
user1.name = 'Bob'; // пытаемся изменить старое значение
console.log(user1.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

let myarray = [
  { userId: '1', userName: 'Tom', userSessionId: 'session-id' },
  { userId: '2', userName: 'Bob', userSessionId: 'session-id' },
];
const myresult = myarray.find(el => el.userId === '2').userName;
console.log(myresult);
