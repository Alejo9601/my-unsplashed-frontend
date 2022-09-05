const login = (username, password) => {
  const user = {
    username,
    password,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  return fetch("http://localhost:3001/api/v1/login", options).then((res) =>
    res.json()
  );
};

export default login;
