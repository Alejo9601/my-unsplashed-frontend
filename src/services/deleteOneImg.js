const deleteOneImg = (imgId) => {
   const options = {
      method: "DELETE",
   };
   return fetch(
      `https://my-unsplashed-backend-dev-gsan.2.us-1.fl0.io/api/v1/${imgId}`,
      options
   );
};

export default deleteOneImg;
