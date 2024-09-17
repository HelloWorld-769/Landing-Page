import { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  businessOutline,
  callOutline,
  cameraOutline,
  homeOutline,
  personOutline,
} from "ionicons/icons";
import "./Navbar.scss";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: homeOutline, text: "Home" },
    { icon: personOutline, text: "About" },
    { icon: businessOutline, text: "Business" },
    { icon: cameraOutline, text: "Pictures" },
    { icon: callOutline, text: "Contact" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="navbar-container">
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <a href="#">
              <span className="icon">
                <IonIcon icon={item.icon} />
              </span>

              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
        <div
          className="navbar-container--selected-item"
          style={{ transform: `translateX(calc(70px * ${activeIndex}))` }}
        />
      </ul>
    </div>
  );
};

export default Navbar;
