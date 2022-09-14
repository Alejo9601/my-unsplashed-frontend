import { Link } from "react-router-dom";

const LogSignFormFooter = ({ textFooter, destLink, linkText }) => {
  return (
    <div className="log-sign__footer">
      <p>{textFooter}</p>
      <Link to={destLink}> {linkText} </Link>
    </div>
  );
};

export default LogSignFormFooter;
