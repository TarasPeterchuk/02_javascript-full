const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars.githubusercontent.com/u/27481981?v=4';
userAvatarElem.src = defaultAvatar;

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNmaeInputElem = document.querySelector('.name-form__input');

const renderUserData = userdata => {
  // console.log(userdata);
  const { avatar_url, name, location } = userdata;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const fetchUserData = username => {
  return fetch(`https://api.github.com/users/${username}`).then(response => response.json());
};

const onSearchUser = () => {
  const userName = userNmaeInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};
showUserBtnElem.addEventListener('click', onSearchUser);

// https://api.github.com/users/USERNAME
