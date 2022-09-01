import { useContext } from "react";
import ImageToDelete from "../../context/ImageToDelete";
import useImages from "../../hooks/useImages";
import Modal from "../Generics/Modal";

const ConfirmDeleteModal = ({ showModal }) => {
  const { imgId, setImgId } = useContext(ImageToDelete);
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
        <input type="password" name="userpassword" id="userpass" />
      </label>
    </Modal>
  );
};

export default ConfirmDeleteModal;
