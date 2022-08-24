import ImgItem from "./imgItem";
import "../../styles/grid-masonry.css";

const images = [
  "1.jpg",
  "2.png",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.png",
  "10.jpg",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.jpg",
  "16.png",
  "17.png",
  "18.jpg",
  "19.jpg",
];

const GridMasonry = () => {
  return (
    <div className="grid-masonry">
      {images.map((image) => {
        return <ImgItem src={require(`../../assets/${image}`)} />;
      })}
    </div>
  );
};

export default GridMasonry;
