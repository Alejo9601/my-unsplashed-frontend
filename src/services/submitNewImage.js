const submitNewImage = (newImage) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newImage),
  };
  return fetch("https://my-unsplashed.herokuapp.com/api/v1", options).then(
    (res) => res.json()
  );
};

export default submitNewImage;
