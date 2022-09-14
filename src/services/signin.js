const signin = (newUser) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  };
  return fetch("http://localhost:3001/api/v1/user", options).then((res) =>
    res.json()
  );
};

export default signin;
