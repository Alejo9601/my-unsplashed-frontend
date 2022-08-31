import ImgItem from "./imgItem";
import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useAllImages from "../../hooks/useAllImages";

const GridMasonry = ({ handleClickDelete }) => {
  const images = useAllImages();

  return (
    <div className="grid-masonry">
      {images.map((image) => {
        return <ImgItem src={image.url} handleDelete={handleClickDelete} />;
      })}
    </div>
  );
};

export default GridMasonry;
