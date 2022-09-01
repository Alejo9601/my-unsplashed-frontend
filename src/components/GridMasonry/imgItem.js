import { useRef, useState } from "react";
import Button from "../Generics/Button";

const ImgItem = ({ image = {}, handleDelete }) => {
  const imgRef = useRef();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    imgRef.current.style.filter = "brightness(50%)";
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    imgRef.current.style.filter = "brightness(100%)";
    setShowOverlay(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="grid-masonry__item-container"
    >
      {showOverlay ? (
        <Button onClick={() => handleDelete(image._url)} btnText="delete" />
      ) : null}

      <img ref={imgRef} src={image.url} alt="" />
    </div>
  );
};

export default ImgItem;
