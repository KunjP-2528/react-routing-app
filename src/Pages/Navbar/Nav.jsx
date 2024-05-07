import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Navbar">
      <h1>Vrize</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
