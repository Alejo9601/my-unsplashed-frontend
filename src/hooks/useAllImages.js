import { useEffect, useState } from "react";
import getAllImages from "../services/getAllImages";

const useAllImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages().then((res) => setImages(res));
  }, []);

  return images;
};

export default useAllImages;
