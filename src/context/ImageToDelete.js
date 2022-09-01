import { createContext, useState } from "react";

const ImageToDelete = createContext();

const ImageToDeleteProvider = ({ children }) => {
  const [imgId, setImgId] = useState(null);

  return (
    <ImageToDelete.Provider value={{ imgId, setImgId }}>
      {children}
    </ImageToDelete.Provider>
  );
};

export { ImageToDeleteProvider };
export default ImageToDelete;
