import ImgItem from "./imgItem";
import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useImages from "../../hooks/useImages";

const GridMasonry = ({ handleClickDelete }) => {
  const { images } = useImages();

  return (
    <div className="grid-masonry">
      {images.map((image) => {
        return <ImgItem src={image.url} handleDelete={handleClickDelete} />;
      })}
    </div>
  );
};

export default GridMasonry;
