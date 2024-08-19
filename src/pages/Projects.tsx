import { motion, useIsPresent } from "framer-motion";
import {  NavLink } from "react-router-dom";

function Projects() {
  const isPresent = useIsPresent();
  return (
    <article>
      <h1
        style={
          {
            "--base-width": "24vw",
            top: "-18vw",
            letterSpacing: "-1.4vw",
            x: "-50%"
          } as any
        }
      >
        Galleries
      </h1>
      <ul>
        <li>
        <NavLink to="/amsterdam">Amsterdam Zuid nightwalk</NavLink>
        </li>
        <li>
        <NavLink to="/london">White lines of Canary Wharf</NavLink>
        </li>
      </ul>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </article>
  );
}

export default Projects;
