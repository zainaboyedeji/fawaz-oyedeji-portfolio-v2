import { motion, useIsPresent } from "framer-motion";
import { NavLink } from "react-router-dom";

function Commissions() {
  const isPresent = useIsPresent();
  return (
    <>
      <style>{`
.projectList{
  width: 100%;
  padding-top: 25vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
}

h1,
h2,
h3 {
  font-family: sofia-pro, sans-serif;
  font-weight: 600;
  font-style: normal;
}

h1 {
  --base-width: 8.2vw;
  font-size: clamp(20px, var(--base-width), 700px);
  font-weight: 700;
  letter-spacing: -0.15rem;
  line-height: 1.2;
  text-align: center;
  margin: 100px 0;
  white-space: nowrap;
  position: absolute;
  top: -10vw;
  left: 50%;
  transform: translateX(-50%);
}

h2 {
  font-size: clamp(20px, 6vw, 700px);
  font-weight: 400;
  margin: 50px 0 10px;
}

p {
  margin: 0 0 30px 0;
  font-size: 18px;
}

#sandbox-title {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-top: 1px dotted var(--accent);
  background: rgba(255, 255, 255, 0.7);
  background-size: 4px 4px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  font-size: 14px;
  line-height: 14px;
}

#sandbox-title svg {
  margin-right: 20px;
}

#sandbox-title a {
  text-decoration: none;
  color: var(--accent);
}

code {
  font-family: input-mono, monospace;
  font-weight: 400;
  font-style: normal;
}

#progress {
  position: fixed;
  top: 20px;
  left: 20px;
  transform: rotate(-90deg);
}

circle {
  stroke-dashoffset: 0;
  stroke-width: 15%;
  fill: none;
}

.bg {
  stroke: var(--accent);
  opacity: 0.3;
}

#progress .indicator {
  stroke: var(--accent);
}

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  background: var(--background);
  -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-corner {
  background: #fff3;
}

h2 {
  margin: 0;
  color: var(--accent);
  left: calc(75vw);
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.2;
  position: absolute;
}

section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 500px;
}

section > div {
  aspect-ratio: 4/3;
  height: 80vh;
  position: relative;
  max-height: 90vh;
  margin: 20px;
  background: var(--white);
  overflow: hidden;
  background: var(--ash-black);
}

img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.progress {
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--accent);
  bottom: 100px;
}

.back {
  padding: 100px;
  display: flex;
  justify-content: center;
  align-self: center;
}

.privacy-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--accent);
  z-index: 2;
}
      `}</style>
      <article>
        <h1
          style={
            {
              "--base-width": "24vw",
              top: "-18vw",
              letterSpacing: "-1.4vw",
              x: "-50%",
            } as any
          }
        >
          Projects
        </h1>
        <ul className="projectList">
          <li>
            <NavLink to="/commissions/gun-for-hire">Gun For Hire</NavLink>
          </li>
          <li>
            <NavLink to="/commissions/new-culture-studios-ibadan">
              New Culture Studios Ibadan
            </NavLink>
          </li>
          <li>
            <NavLink to="/commissions/nigerian-policing-programme">
              Nigerian Policing Programme
            </NavLink>
          </li>
          <li>
            <NavLink to="/commissions/hidden-flows">Hidden Flows</NavLink>
          </li>
        </ul>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </article>
    </>
  );
}

export default Commissions;
