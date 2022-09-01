import { useContext } from "react";
import ImagesContext from "../context/ImagesContext";
import submitNewImage from "../services/submitNewImage";

const useImages = () => {
  const { images, setImages } = useContext(ImagesContext);

  const submitImage = async (name, url) => {
    const image = {
      name: name,
      url: url,
    };
    return submitNewImage(image).then((submitedImage) =>
      setImages((prevImages) => [...prevImages, submitedImage])
    );
  };

  return { images, submitImage };
};

export default useImages;
