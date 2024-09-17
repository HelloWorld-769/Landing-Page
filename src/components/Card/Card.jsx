import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ content }) => {
  return <div className="card-container">{content}</div>;
};

Card.propTypes = {
  content: PropTypes.object,
};

export default Card;
