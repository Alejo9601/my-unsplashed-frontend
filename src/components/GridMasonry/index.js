import ImgItem from "./imgItem";
import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useImages from "../../hooks/useImages";
import { useContext } from "react";
import ImageToDeleteContext from "../../context/ImageToDeleteContext";

const GridMasonry = ({ onDeleteBtnClick }) => {
  const { images } = useImages();
  const { setImgId } = useContext(ImageToDeleteContext);

  const handleDeleteBtn = (idToDelete) => {
    onDeleteBtnClick();
    setImgId(idToDelete);
  };

  return (
    <div className="grid-masonry">
      {images.map((image) => {
        return (
          <ImgItem
            key={image._id}
            src={image.url}
            handleDelete={handleDeleteBtn}
            listId={image._id}
          />
        );
      })}
    </div>
  );
};

export default GridMasonry;
