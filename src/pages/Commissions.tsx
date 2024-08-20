import { motion, useIsPresent } from "framer-motion";
import {  NavLink } from "react-router-dom";

function Commissions() {
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
        <NavLink to="/commissions/gun-for-hire">Gun For Hire</NavLink>
        </li>
        <li>
        <NavLink to="/commissions/new-culture-studios-ibadan">New Culture Studios Ibadan</NavLink>
        </li>
        <li>
        <NavLink to="/commissions/nigerian-policing-programme">Nigerian Policing Programme</NavLink>
        </li>
        <li>
        <NavLink to="/commissions/hidden-flows">Hidden Flows</NavLink>
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

export default Commissions;
