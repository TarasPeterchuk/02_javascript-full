import { fetchUserData, fetchRepositories } from './src/scripts/gateways.js';
import { renderUserData } from './src/scripts/user.js';
import { renderRepos, cleanReposList } from './src/scripts/repos.js';
import { showSpinner, hideSpinner } from './src/scripts/spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNmaeInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNmaeInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};
showUserBtnElem.addEventListener('click', onSearchUser);
