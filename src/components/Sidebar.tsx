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
      <div className="w-1/4 h-screen fixed top-0 left-0 text-white p-8 flex flex-col justify-start">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-8">
            <NavLink to="/" className="hover:text-gray-400">
              FAWAZ <br /> OYEDEJI.
            </NavLink>
          </h1>
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink to="/" className="hover:text-gray-400">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-gray-400">
                  projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/commissions" className="hover:text-gray-400">
                  commissions
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-gray-400">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-gray-400">
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
    );
  }
  
  export default SideBar;
  