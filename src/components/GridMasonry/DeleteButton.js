const DeleteButton = ({ onClickAction, btnText }) => {
  return (
    <div className="generic-button" onClick={() => onClickAction()}>
      <p>{btnText}</p>
    </div>
  );
};

export default DeleteButton;
