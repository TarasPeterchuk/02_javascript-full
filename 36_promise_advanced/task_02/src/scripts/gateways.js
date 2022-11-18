export const fetchUserData = async username => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};
export const fetchRepositories = async url => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

try {
  const userData = await fetchUserData(userName);
  renderUserData(userData);
  const reposList = await fetchRepositories(userData.repos_url);
  renderRepos(reposList);
} catch (err) {
  alert(err.message);
} finally {
  hideSpinner();
}
