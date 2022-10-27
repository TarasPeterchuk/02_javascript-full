'use strict';

/**
 * @param {string[]} allStudentsList
 * @param {string[]} studentsForRetake
 * @return {string[]}
 */
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  // put your code here
  return allStudentsList
    .filter(name => !studentsForRetake.includes(name))
    .map(name => 'Good job, ' + name);
};

// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

// const passedStudents = allStudentsList.filter(name => studentsForRetake.indexOf(name) === -1);

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   // put your code here
//   const passedStudents = allStudentsList.filter(name => !studentsForRetake.includes(name));
//   const messages = passedStudents.map(name => 'Good job, ' + name);
//   return messages;
// };
