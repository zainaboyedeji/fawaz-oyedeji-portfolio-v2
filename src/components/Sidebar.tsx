import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaShareAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--background)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: any) => (
  <button onClick={toggle} className="md:hidden">
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.02), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.02, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      //@ts-ignore
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  function Menu() {
    return (
      <nav className="menu">
        <ul className="mobileUl">
          <li className="mobileLi">
            <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
              home
            </NavLink>
          </li>
          <li className="mobileLi">
            <NavLink
              to="/projects"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              projects
            </NavLink>
          </li>
          <li className="mobileLi">
            <NavLink
              to="/commissions"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              commissions
            </NavLink>
          </li>
          <li className="mobileLi">
            <NavLink
              to="/about-me"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              about
            </NavLink>
          </li>
          <li className="mobileLi">
            <NavLink
              to="/contact-me"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <>
      <style>{`
        .menu {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 400px;
          background: var(--accent);
          padding-top: 100px;
          transform: translateX(-100%);
          will-change: transform;
        }

        .mobileUl {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 15px;
        }

        .mobileLi {
          color: var(--background);
          display: block;
          transform-origin: -20px 50%;
          font-weight: bold;
          font-size: 48px;
          padding: 10px;
          will-change: transform, opacity, filter;
        }

        button {
          outline: none;
          border: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          cursor: pointer;
          position: absolute;
          top: 5px;
          left: 300px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--accent);
          padding: 10px;
        }
      `}</style>
      <div>
        {/* Top Navigation for Mobile */}
        <div className="flex items-center justify-between fixed top-4 left-4 right-4 z-50 md:hidden">
          <div className="text-xl font-bold">
            <NavLink to="/">
              FAWAZ <br /> OYEDEJI.
            </NavLink>
          </div>
          <div ref={scope}>
            <Menu />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>
        </div>

        {/* Sidebar (visible only on desktop) */}
        <div
          className={`hidden md:flex fixed top-0 left-0 h-screen w-64 p-8 flex-col justify-between z-40 pt-20 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:translate-x-0 md:w-1/4 bg-white text-black md:bg-black md:text-white`}
        >
          <div>
            <div className="text-5xl font-bold hidden md:block">
              <NavLink
                to="/"
                className="hover:text-gray-400"
                onClick={() => setIsOpen(!isOpen)}
              >
                FAWAZ <br /> OYEDEJI.
              </NavLink>
            </div>
            <nav className="mt-10">
              <ul className="mb-4">
                <li>
                  <NavLink
                    to="/"
                    className="hover:text-gray-400"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className="hover:text-gray-400"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/commissions"
                    className="hover:text-gray-400"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    commissions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-me"
                    className="hover:text-gray-400"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    about
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact-me"
                    className="hover:text-gray-400"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-8">
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

        {/* Overlay for Mobile when Sidebar is Open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        )}
      </div>
    </>
  );
}

export default SideBar;
