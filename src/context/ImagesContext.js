import { createContext, useEffect, useState } from "react";
import getAllImages from "../services/getAllImages";

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages().then((res) => setImages(res));
  }, []);

  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      {children}
    </ImagesContext.Provider>
  );
};

export { ImagesProvider };
export default ImagesContext;
