export const fetchUserData = username =>
  fetch(`https://api.github.com/users/${username}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });

export const fetchRepositories = url =>
  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
