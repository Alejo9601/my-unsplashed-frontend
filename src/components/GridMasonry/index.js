import ImgItem from "./imgItem";
import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useAllImages from "../../hooks/useAllImages";

const GridMasonry = ({ handleDelete }) => {
  const images = useAllImages();

  return (
    <div className="grid-masonry">
      {images.map((image) => {
        return <ImgItem src={image.url} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default GridMasonry;
