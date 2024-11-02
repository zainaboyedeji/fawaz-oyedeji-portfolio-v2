import { motion, useIsPresent } from "framer-motion";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Commissions() {
  const isPresent = useIsPresent();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
      <style>{`
.projectUL{
   width: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          list-style: none;
}
   .projectsLI {
 font-size: 2rem;
          margin-bottom: 1.6rem;
          text-decoration: underline;
}
  h1, h2, h3 {
          font-family: sofia-pro, sans-serif;
          font-weight: 600;
          font-style: normal;
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

        @media (max-width: 768px) {
          .commissionsLI {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          h1 {
            font-size: 2.5rem;
            margin-top: 1rem;
          }

          h2 {
            font-size: clamp(18px, 5vw, 500px);
            margin: 30px 0 8px;
          }

          p {
            font-size: 16px;
            margin: 0 0 20px 0;
          }

          #sandbox-title {
            padding: 15px;
            font-size: 12px;
            line-height: 12px;
          }

          .back {
            padding: 50px;
          }
      `}</style>
      <article>
        <h1 className="text-center text-5xl font-bold mt-24 lg:text-8xl sm:mt-16">
          Projects
        </h1>
        <ul className="projectUL mt-5">
          <li className="projectsLI">
            <NavLink to="/projects/mo-advert-mo-power">
              Mo Advert Mo Power
            </NavLink>
          </li>
          <li className="projectsLI">
            <NavLink to="/projects/awakening">Awakening</NavLink>
          </li>
          <li className="projectsLI">
            <NavLink to="/projects/yours-in-arms">Yours In Arms</NavLink>
          </li>
          <li className="projectsLI">
            <NavLink to="/projects/resale">Resale</NavLink>
          </li>
          <li className="projectsLI">
            <NavLink to="/projects/otto-daily">Otto Daily</NavLink>
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
