const deleteOneImg = (imgId) => {
  const options = {
    method: "DELETE",
  };
  return fetch(`https://my-unsplashed.herokuapp.com/api/v1/${imgId}`, options);
};

export default deleteOneImg;
