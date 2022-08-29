import { useRef } from "react";

const ImgItem = ({ src, handleDelete }) => {
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
        onClick={() => handleDelete()}
      >
        <p>delete</p>
      </div>
      <img ref={imgRef} src={src} alt="" />
    </div>
  );
};

export default ImgItem;
