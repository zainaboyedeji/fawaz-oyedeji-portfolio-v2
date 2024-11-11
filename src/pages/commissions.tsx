import { useEffect } from "react";
import { motion, useIsPresent } from "framer-motion";
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
        .commissionsUL {
          width: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          list-style: none;
        }
        .commissionsLI {
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
        circle {
          stroke-dashoffset: 0;
          stroke-width: 15%;
          fill: none;
        }

        .bg {
          stroke: var(--accent);
          opacity: 0.3;
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

        img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
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
        }
      `}</style>
      <article>
        <h1 className="text-center text-5xl font-bold mt-24 lg:text-8xl sm:mt-16">Commissions</h1>
        <ul className="commissionsUL mt-5">
          <li className="commissionsLI">
            <NavLink to="/commissions/gun-for-hire">Gun For Hire</NavLink>
          </li>
          <li className="commissionsLI">
            <NavLink to="/commissions/new-culture-studios-ibadan">
              New Culture Studios Ibadan
            </NavLink>
          </li>
          <li className="commissionsLI">
            <NavLink to="/commissions/nigerian-policing-programme">
              Nigerian Policing Programme
            </NavLink>
          </li>
          <li className="commissionsLI">
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
