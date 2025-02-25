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
          <img
            src="/fawaz-oyedeji.jpg"
            alt="fawwaz"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-[18rem] md:h-[18rem] rounded-full"
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center text-sm md:text-base">
          <p className="mb-5">
            Fawaz Oyedeji is a documentary photographer and historian based in
            Lagos, Nigeria. He holds a background in Mass Communication from
            Yaba College of Technology and a B.A.E in History Education from the
            University of Lagos. Recently, he graduated from the Market Photo
            Workshop in South Africa.
          </p>

          <p className="mb-5">
            Fawaz's primary focus with his artistic work revolves around
            exploring political expression in Africa. In broader terms, he
            examines how people interact with power. In a cultural society,
            power is not just a repressive force but an active one that operates
            at different levels and instances within social structures—such as
            political power, social class, institutions, and events. Power
            shapes reality by assigning roles to individuals and, in a sense,
            molds certain types of people. It also constructs narratives for
            people, influencing how they engage with and fit into those
            narratives.
          </p>

          <p className="mb-5">
            Fawaz’s work has been commissioned by notable publications and
            organizations such as The Financial Times, Sahelein.com, ICLEI –
            Local Governments for Sustainability, and the UN World Food
            Programme. His photography has been exhibited globally, with
            showings in Lagos, New York, Kigali, and Germany. He has been the
            recipient of grants and awards, including the Eugene Smith Memorial
            Fund Student Grant in 2019, the Bronx Documentary Center/DC Grant in
            2020, and the Daniele Tamagni Grant in 2021 for his project "Yours
            In Arms." In 2023, he was honored with the Prince Claus Fund Seed
            Awards.
          </p>

          <p>
            View full CV
            <Link to="/my-cv" className="ml-1 text-blue-700 underline hover:text-purple-600">
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
