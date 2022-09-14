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
  return fetch("http://localhost:3001/api/v1/login", options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return null; //User Not Found
    })
    .catch((error) => console.error("Something went wrong"));
};

export default login;
