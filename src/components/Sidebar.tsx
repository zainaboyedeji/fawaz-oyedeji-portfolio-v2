import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaShareAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between fixed top-4 left-4 right-4 z-50">
        <div className="h-8 w-8">
          <NavLink to="/">
            FAWAZ <br /> OYEDEJI.
          </NavLink>
        </div>
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-8 flex flex-col justify-start z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:w-1/4`}
      >
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">
            <NavLink
              to="/"
              className="hover:text-gray-400"
              onClick={toggleSidebar}
            >
              FAWAZ <br /> OYEDEJI.
            </NavLink>
          </h1>
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-gray-400"
                  onClick={toggleSidebar}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="hover:text-gray-400"
                  onClick={toggleSidebar}
                >
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/commissions"
                  className="hover:text-gray-400"
                  onClick={toggleSidebar}
                >
                  commissions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-gray-400"
                  onClick={toggleSidebar}
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-gray-400"
                  onClick={toggleSidebar}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-16 flex space-x-4">
          <a
            href="https://www.instagram.com/fawaz.oyedeji/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/fawazoyedeji/"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
            className="hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/fawazoyedeji"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UCM_TTJSaVbQlfetUfYvXf_w"
            target="_blank"
            rel="noreferrer"
            title="Youtube"
            className="hover:text-gray-400"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/fawaz.oyedeji/"
            target="_blank"
            rel="noreferrer"
            title="Share"
            className="hover:text-gray-400"
          >
            <FaShareAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
