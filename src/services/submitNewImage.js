const submitNewImage = (newImage) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newImage),
  };
  return fetch("http://localhost:3001/api/v1", options).then((res) =>
    res.json()
  );
};

export default submitNewImage;
