import ImgItem from "./ImgItem";

const ImgList = ({ imgsArray, onDeleteBtnClick }) => {
  return (
    <>
      {imgsArray.map((image) => {
        return (
          <ImgItem
            key={image._id}
            image={image}
            onDeleteBtnClick={onDeleteBtnClick}
          />
        );
      })}
    </>
  );
};

export default ImgList;
