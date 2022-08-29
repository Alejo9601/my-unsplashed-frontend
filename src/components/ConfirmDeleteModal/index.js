import "../../styles/delete-modal.css";

const ConfirmDeleteModal = () => {
  return (
    <div className="confirm-delete-modal">
      <h3>Are you sure?</h3>
      <form className="confirm-delete-modal__form">
        <label>
          Password
          <input type="password" name="userpassword" id="userpass" />
        </label>
        <div className="confirm-delete-modal__form-buttons">
          <input type="button" name="cancel" value="Cancel" id="cancel-btn" />
          <input type="button" name="delete" value="Delete" id="delete-btn" />
        </div>
      </form>
    </div>
  );
};

export default ConfirmDeleteModal;
