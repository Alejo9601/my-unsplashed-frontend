const getAllImages = () => {
  return fetch("https://my-unsplashed.herokuapp.com/api/v1").then((res) =>
    res.json()
  );
};

export default getAllImages;
