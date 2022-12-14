import { useContext } from "react";
import ImageToDeleteContext from "../../context/ImageToDeleteContext";
import useImages from "../../hooks/useImages";
import Modal from "../Generics/Modal";

const ConfirmDeleteModal = ({ showModal }) => {
  const { imgId, setImgId } = useContext(ImageToDeleteContext);
  const { deleteImg } = useImages();

  const handleOnConfirmDelete = () => {
    deleteImg(imgId).then(showModal(false));
  };

  return (
    <Modal
      btnActionText="Delete"
      handleAction={handleOnConfirmDelete}
      handleCancel={() => {
        showModal(false);
        setImgId(null);
      }}
    >
      <label>
        Password
        <input type="password" name="userpassword" />
      </label>
    </Modal>
  );
};

export default ConfirmDeleteModal;
