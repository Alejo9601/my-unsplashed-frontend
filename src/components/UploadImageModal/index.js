import { useRef } from "react";
import submitNewImage from "../../services/submitNewImage";
import Modal from "../Generics/Modal";

const UploadImageModal = ({ handleCancelUpload }) => {
  const imageLabelRef = useRef();
  const imageUrlRef = useRef();

  const handleSubmitImage = () => {
    const image = {
      name: imageLabelRef.current.value,
      url: imageUrlRef.current.value,
    };
    submitNewImage(image).then((res) => console.log(res));
  };

  return (
    <Modal
      action="ADD"
      handleCancel={handleCancelUpload}
      handleAction={handleSubmitImage}
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
