import { useEffect } from "react";
import { Link, Switch } from "react-router-dom";
import { GrCompass } from "react-icons/gr";
import "../styles.css";

const Header = () => {

  const scrollUp = () => {
    window.scrollTo(0, 0);
  }

  return (
    <Switch>
      <header>
      <div className="headerContainer">
        <div className="brand" onClick={scrollUp}>
          <Link to="/">
          <GrCompass size="40px" />
          <h2>Sergen Demir</h2>
          </Link>
        </div>
        <ul className="navLinks">
          <li>
            <Link to="/" onClick={scrollUp}>Home</Link>
          </li>
          <li>
            <Link to="/Projects" onClick={scrollUp}>Projects</Link>
          </li>
          <li>
            <Link to="/About" onClick={scrollUp}>About</Link>
          </li>
          <li>
            <Link to="/Contact" onClick={scrollUp}>Contact</Link>
          </li>
        </ul>
      </div>
      </header>
    </Switch>
  );
};

export default Header;
