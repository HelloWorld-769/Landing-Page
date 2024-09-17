import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./AutoTypingText.scss";

const AutoTypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const typingRef = useRef(null);

  useEffect(() => {
    const typingInterval = 200;
    const pauseDuration = 1000;

    const handleTyping = () => {
      if (isDeleting) {
        if (index > 1) {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
          typingRef.current = setTimeout(handleTyping, pauseDuration);
          return;
        }
      } else {
        if (index < text.length) {
          setDisplayText((prevText) => prevText + text[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsDeleting(true);
          typingRef.current = setTimeout(handleTyping, pauseDuration);
          return;
        }
      }
      typingRef.current = setTimeout(handleTyping, typingInterval);
    };

    typingRef.current = setTimeout(handleTyping, typingInterval);

    return () => clearTimeout(typingRef.current);
  }, [index, isDeleting]);

  return <h1 className="auto-typing-text">{displayText}</h1>;
};

AutoTypingText.propTypes = {
  text: PropTypes.string,
};

export default AutoTypingText;
