import { useRef } from "react";
import useImages from "../../hooks/useImages";
import Modal from "../Generics/Modal";

const UploadImageModal = ({ showModal }) => {
  const { submitImage } = useImages();
  const imageLabelRef = useRef();
  const imageUrlRef = useRef();

  return (
    <Modal
      action="ADD"
      handleCancel={() => showModal(false)}
      handleAction={() =>
        submitImage(
          imageLabelRef.current.value,
          imageUrlRef.current.value
        ).then(showModal(false))
      }
    >
      <label>
        Label
        <input ref={imageLabelRef} type="text" name="label" id="image-label" />
      </label>
      <label>
        Photo URL
        <input ref={imageUrlRef} type="text" name="url" id="image-url" />
      </label>
    </Modal>
  );
};

export default UploadImageModal;
