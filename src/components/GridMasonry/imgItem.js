import { useRef } from "react";

const ImgItem = ({ image = {}, handleDelete }) => {
  const btnRef = useRef();
  const imgRef = useRef();

  const handleMouseEnter = () => {
    imgRef.current.style.filter = "brightness(50%)";
    btnRef.current.className = "generic-button visible";
  };

  const handleMouseLeave = () => {
    imgRef.current.style.filter = "brightness(100%)";
    btnRef.current.className = "generic-button";
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="grid-masonry__item-container"
    >
      <div
        ref={btnRef}
        className="generic-button"
        onClick={() => handleDelete(image._id)}
      >
        <p>delete</p>
      </div>
      <img ref={imgRef} src={image.url} alt="" />
    </div>
  );
};

export default ImgItem;
