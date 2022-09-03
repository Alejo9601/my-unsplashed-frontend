const login = (username, password) => {
  const user = {
    username,
    password,
  };
  const options = {
    method: "GET",
    body: user,
  };
  return fetch("http://localhost:3001/api/v1/user/login", options).then((res) =>
    res.json()
  );
};

export default login;
