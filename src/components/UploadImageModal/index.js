import Modal from "../Generics/Modal";

const UploadImageModal = ({ handleCancelUpload }) => {
  return (
    <Modal action="ADD" handleCancel={handleCancelUpload}>
      <label>
        Label
        <input type="text" name="label" id="image-label" />
      </label>
      <label>
        Photo URL
        <input type="text" name="url" id="image-url" />
      </label>
    </Modal>
  );
};

export default UploadImageModal;
