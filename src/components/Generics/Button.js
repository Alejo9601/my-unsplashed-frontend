const Button = ({ onClick, btnText }) => {
  return (
    <div className="generic-button" onClick={() => onClick()}>
      <p>{btnText}</p>
    </div>
  );
};

export default Button;
