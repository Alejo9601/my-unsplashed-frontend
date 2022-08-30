import Modal from "../Generics/Modal";

const ConfirmDeleteModal = ({ handleCancelDelete }) => {
  return (
    <Modal btnActionText="Delete" handleCancel={handleCancelDelete}>
      <label>
        Password
        <input type="password" name="userpassword" id="userpass" />
      </label>
    </Modal>
  );
};

export default ConfirmDeleteModal;
