export const addUserToStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};
