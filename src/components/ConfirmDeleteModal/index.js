import "../../styles/delete-modal.css";

const ConfirmDeleteModal = () => {
  return (
    <div className="confirm-delete-modal">
      <h3>Are you sure?</h3>
      <form className="confirm-delete-modal__form">
        <label>
          Password
          <input type="password" name="userpassword" />
        </label>
      </form>
    </div>
  );
};

export default ConfirmDeleteModal;
