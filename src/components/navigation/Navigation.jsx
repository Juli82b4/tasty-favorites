import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="burger-menu" onClick={toogleMenu}>
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={toogleMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={toogleMenu}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" onClick={toogleMenu}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={toogleMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
