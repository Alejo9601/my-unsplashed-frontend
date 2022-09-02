import { createContext, useEffect, useState } from "react";
import getAllImages from "../services/getAllImages";

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [imagesBySearch, setImagesBySearch] = useState([]);

  useEffect(() => {
    getAllImages().then((res) => setImages(res));
  }, []);

  return (
    <ImagesContext.Provider
      value={{ images, setImages, imagesBySearch, setImagesBySearch }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export { ImagesProvider };
export default ImagesContext;
