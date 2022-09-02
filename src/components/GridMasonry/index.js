import ImgItem from "./ImgItem";
import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useImages from "../../hooks/useImages";

const GridMasonry = ({ onDeleteBtnClick }) => {
  const { images } = useImages();

  return (
    <div className="grid-masonry">
      {images.map((image) => {
        return (
          <ImgItem
            key={image._id}
            image={image}
            onDeleteBtnClick={onDeleteBtnClick}
          />
        );
      })}
    </div>
  );
};

export default GridMasonry;
