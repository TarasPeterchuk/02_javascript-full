const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

// const renderTaskList = taskListsData => {
//   console.log(taskListsData);
//   return taskListsData;
// };
// const fetchTaskList = () => {
//   return fetch(baseUrl).then(response => response.json());
// };

export function getTasksList() {
  return fetch(baseUrl).then(response => response.json());
}
export function getTaskById(taskId) {
  return fetch(baseUrl.concat(`/${taskId}`)).then(response => response.json());
}

getTasksList().then(tasksList => {
  console.log(tasksList);
});
// ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]

// export function getTaskById(taskId) {
//   return getTasksList().then(userData => {
//     const resultArr = userData;
//     return resultArr.filter(el => el.id === taskId);
//   });
// }

getTaskById('1').then(taskData => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});
