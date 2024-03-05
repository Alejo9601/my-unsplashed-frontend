const getAllImages = () => {
   return fetch(
      "https://my-unsplashed-backend-dev-gsan.2.us-1.fl0.io/api/v1"
   ).then((res) => res.json());
};

export default getAllImages;
