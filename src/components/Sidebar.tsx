import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaShareAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrap">
        <h1 className="logo long-text">
          <NavLink to="/">
            FAWAZ <br /> OYEDEJI.
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li className="item">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="item">
              <NavLink to="/projects">projects</NavLink>
            </li>
            <li className="item hidden">
              <NavLink to="/yoursinarms">yours in arms</NavLink>
            </li>
            <li className="item hidden">
              <NavLink to="/endsars-awakening">awakening</NavLink>
            </li>
            <li className="item hidden">
              <NavLink to="/otto-daily">otto daily</NavLink>
            </li>
            <li className="item">
              <NavLink to="/commissions">commissions</NavLink>
            </li>
            <li className="item">
              <NavLink to="/about">about</NavLink>
            </li>
            <li className="item">
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>

          <div className="social-links">
            <a
              href="https://www.instagram.com/fawaz.oyedeji/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/fawazoyedeji/"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/fawazoyedeji"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UCM_TTJSaVbQlfetUfYvXf_w"
              target="_blank"
              rel="noreferrer"
              title="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/fawaz.oyedeji/"
              target="_blank"
              rel="noreferrer"
              title="Share"
            >
              <FaShareAlt />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
