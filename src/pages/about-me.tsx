import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import { useEffect } from "react";

function AboutMe() {
  const isPresent = useIsPresent();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center overflow-hidden mt-24 px-6 lg:px-20 mb-10 lg:mb-0">
        <div className="w-full md:w-2/5 text-center mb-5 md:mb-0 flex justify-center">
          <img src="/fawaz-oyedeji.jpg" alt="fawwaz" className="" />
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center text-sm md:text-base">
          <p className="mb-5">
            Fawaz Oyedeji is a documentary photographer, photojournalist, and
            historian from Nigeria whose work centers on exploring political
            expression in Africa. His work examines how people interact with
            power, understanding it not just as a repressive force but as one
            that operates actively within various levels of social structures,
            such as political authority, social class, institutions, and events.
          </p>

          <p className="mb-5">
            He holds a background in Mass Communication from Yaba College of
            Technology and studied History Education at the University of Lagos.
            In 2023, he graduated from the Market Photo Workshop in South
            Africa, further refining his photojournalism and documentary
            practice.
          </p>

          <p className="mb-5">
            Fawaz’s work, which covers themes such as the rise of private
            security companies, the role of political posters during elections,
            protests against police violence, and the lives of student cadets,
            has been published in The Financial Times, Les Echos and exhibited
            globally, earning him grants, awards, and commissions from
            prestigious organizations like the W. Eugene Smith Fund, Prince
            Claus Fund, Christian Dior Parfums, Daniele Tamagni Foundation, UN
            WFP, Architectural Review, Magnum Photos, and Agence France-Presse
            (AFP), etc.
          </p>

          <p>
            View full CV
            <Link
              to="/my-cv"
              className="ml-1 text-blue-700 underline hover:text-purple-600"
            >
              here
            </Link>
          </p>
        </div>
      </div>
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
    </>
  );
}

export default AboutMe;
