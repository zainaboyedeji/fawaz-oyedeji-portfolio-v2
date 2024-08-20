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
        Projects
      </h1>
      <ul>
        <li>
        <NavLink to="/projects/mo_advert_mo_power">Mo Advert Mo Power</NavLink>
        </li>
        <li>
        <NavLink to="/projects/awakening">Awakening</NavLink>
        </li>
        <li>
        <NavLink to="/projects/yours-in-arms">Yours In Arms</NavLink>
        </li>
        <li>
        <NavLink to="/projects/resale">Resale</NavLink>
        </li>
        <li>
        <NavLink to="/projects/otto-daily">Otto Daily</NavLink>
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
