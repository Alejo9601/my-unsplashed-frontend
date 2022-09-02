import { useContext } from "react";
import ImagesContext from "../context/ImagesContext";
import deleteOneImg from "../services/deleteOneImg";
import submitNewImage from "../services/submitNewImage";

const useImages = () => {
  const { images, setImages, imagesBySearch, setImagesBySearch } =
    useContext(ImagesContext);

  const submitImage = async (name, url) => {
    const image = {
      name: name,
      url: url,
    };
    return submitNewImage(image).then((submitedImage) =>
      setImages((prevImages) => [...prevImages, submitedImage])
    );
  };

  const deleteImg = (imgId) => {
    return deleteOneImg(imgId).then(
      setImages((prevImages) =>
        prevImages.filter((image) => image._id !== imgId)
      )
    );
  };

  const searchByName = (nameToSearch) => {
    if (nameToSearch === "") {
      console.log("entre");
      setImagesBySearch([]);
      return;
    }
    console.log(typeof nameToSearch);
    console.log(images.filter((image) => image.name === nameToSearch));
    setImagesBySearch(images.filter((image) => image.name === nameToSearch));
  };

  return { images, imagesBySearch, submitImage, deleteImg, searchByName };
};

export default useImages;
