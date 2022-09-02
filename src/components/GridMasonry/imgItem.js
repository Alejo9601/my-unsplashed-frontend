import { useContext, useRef, useState } from "react";
import ImageToDeleteContext from "../../context/ImageToDeleteContext";
import Button from "../Generics/Button";

const ImgItem = ({ image = {}, onDeleteBtnClick }) => {
  const imgRef = useRef();
  const [showOverlay, setShowOverlay] = useState(false);
  const { setImgId } = useContext(ImageToDeleteContext);

  const handleDeleteBtn = () => {
    onDeleteBtnClick();
    setImgId(image._id);
  };

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
        <Button onClickAction={handleDeleteBtn} btnText="delete" />
      ) : null}

      <img ref={imgRef} src={image.url} alt="" />
    </div>
  );
};

export default ImgItem;
