import { Link } from "react-router-dom";
import "./index.css"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <div className="navbar__logo">
            <h2 className="logo">Back Projects</h2>
            
          </div>
          <div className="navbar__menu">
              <Link to="/home" className="link">
                Home
              </Link>
              <Link to="/about" className="link">
                About
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
