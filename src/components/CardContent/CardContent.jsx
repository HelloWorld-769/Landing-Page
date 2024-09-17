import PropTypes from "prop-types";
import "./CardContent.scss";

const CardContent = ({ title, src, alt }) => {
  return (
    <div className="card-content-container">
      <img src={src} alt={alt} />
      <label>{title}</label>
    </div>
  );
};

CardContent.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default CardContent;
