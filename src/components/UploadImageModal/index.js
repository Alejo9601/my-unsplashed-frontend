import "../../styles/upload-modal.css";

const UploadImageModal = ({ handleCancelUpload }) => {
  return (
    <div className="upload-image-modal">
      <h3>Add new photo</h3>
      <form className="upload-image-modal__form">
        <label>
          Label
          <input type="text" name="label" id="image-label" />
        </label>
        <label>
          Photo URL
          <input type="text" name="url" id="image-url" />
        </label>
        <div className="upload-image-modal__form-buttons">
          <input
            type="button"
            onClick={handleCancelUpload}
            name="cancel"
            value="Cancel"
            id="cancel-btn"
          />
          <input type="button" name="upload" value="Upload" id="upload-btn" />
        </div>
      </form>
    </div>
  );
};

export default UploadImageModal;
