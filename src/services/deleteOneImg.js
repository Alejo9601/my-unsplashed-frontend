const deleteOneImg = (imgId) => {
  const options = {
    method: "DELETE",
  };
  return fetch(`http://localhost:3001/api/v1:${imgId}`, options);
};

export default deleteOneImg;
