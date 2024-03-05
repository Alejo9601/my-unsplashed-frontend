const submitNewImage = (newImage) => {
   const options = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(newImage),
   };
   return fetch(
      "https://my-unsplashed-backend-dev-gsan.2.us-1.fl0.io/api/v1",
      options
   ).then((res) => res.json());
};

export default submitNewImage;
