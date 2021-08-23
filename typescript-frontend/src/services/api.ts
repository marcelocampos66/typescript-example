const getUsers = () => {
  return fetch('http://localhost:3001/users')
    .then((response) => response.json())
    .then((data) => data)
};

export default getUsers;
