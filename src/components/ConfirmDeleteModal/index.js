import Modal from "../Generics/Modal";

const ConfirmDeleteModal = ({ showModal }) => {
  return (
    <Modal btnActionText="Delete" handleCancel={() => showModal(false)}>
      <label>
        Password
        <input type="password" name="userpassword" id="userpass" />
      </label>
    </Modal>
  );
};

export default ConfirmDeleteModal;
