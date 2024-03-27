const uploadImage = (imgToUpload) => {
  const formData = new FormData();
  formData.append("myFile", imgToUpload);
  const options = {
    method: "POST",
    body: formData,
  };
  return fetch(
    "https://img-upload-back.herokuapp.com/api/v1/images",
    options
  ).then((res) => res.json());
};

export default uploadImage;
