import { IoMdArrowRoundBack } from "react-icons/io";
import { motion, useIsPresent } from "framer-motion";

function AboutMe() {
  const isPresent = useIsPresent();
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="overflow-hidden mt-24 px-6 lg:px-20 mb-10 lg:mb-0">
        <div>
          <h6 className="mb-5 text-3xl">Education</h6>
          <p>
            • 2023: Photojournalism and Documentary Photography – Market Photo
            Workshop, Johannesburg, ZA.
          </p>

          <p>
            • 2022: Bachelor of Arts & Education, Specialisation: History
            Education, University of Lagos, Nigeria.
          </p>

          <p>
            • 2017: National Diploma, Mass Communication – Yaba College of
            Technology, Nigeria .
          </p>
        </div>

        <div className="mt-5">
          <h6 className="mb-5 text-3xl">Photography Grants</h6>
          <p>
            • 2024: Magnum Photos/Lagos Photo; Beyond The Silence – Recipient
          </p>
          <p>
            • 2024: Dior Photography and Visual Arts Award for Young Talents –
            Laureate
          </p>
          <p>• 2023: Prince Claus Seed Awards – Recipient</p>
          <p>• 2021: Daniele Tamagni Grant – Recipient</p>
          <p>
            • 2020: Bronx Documentary Center/Darryl Chappell Grant – Recipient
          </p>

          <p>• 2019: W. Eugene Smith Memorial Fund Student Grant – Recipient</p>
        </div>

        <div className="mt-5">
          <h6 className="mb-5 lg:text-3xl text-2xl">
            Commissions/Publications
          </h6>
          <p>
            • 2025: "Can you look at these 9 photos and not smile on
            International Day of Happiness?" – National Public Radio [NPR]
          </p>
          <p>
            • 2024: "Nigeria, the Largest Democracy in Africa, Bends Under the
            'Wahala'" – Les Echos
          </p>
          <p>• 2024: Photo Reportages in Lagos – AFP</p>
          <p>
            • 2024: "Revisit: New Culture Studios in Ibadan, Nigeria by Demas
            Nwoko" – Architectural Review
          </p>

          <p>
            • 2023: Photo Reportage in Maiduguri – Arete / UN World Food
            Programme
          </p>
          <p>
            • 2021: "Gun for Hire: Nigeria Security Fears Spark Boom in Private
            Protection" – Financial Times
          </p>
          <p>
            • 2020: "#EndSARS is a Rare Moment of Class Solidarity in Nigeria" –
            Sahelien
          </p>
          <p>• 2020: Photo Narration in Oyo – ICLEI Africa’s RISE Africa</p>

          <p>
            • 2020: Photo Reportage in Lagos – Coffey International Development,
            Ltd
          </p>

          <p>• 2020: "Yours in Arms" – No Wahala Magazine</p>
        </div>

        <div className="mt-5">
          <h6 className="mb-5 text-3xl">Group Exhibitions</h6>
          <p>
            • 2025: Magnum Photos / African Artists’ Foundation / Odesa Photo
            Days - Beyond The Silence, Ukraine
          </p>
          <p>
            • 2024: Magnum Photos / African Artists’ Foundation / Odesa Photo
            Days - Beyond The Silence, Kazakhstan / Mexico
          </p>
          <p>
            • 2024: Christian Dior Parfums / LUMA Arles – Dior Photography and
            Visual Arts Award for Young Talents, Arles, France
          </p>
          <p>• 2024: Daniele Tamagni – Style Is Life, Milano, Italy</p>
          <p>• 2024: StoryMi / CFI – Naija in Lights, Paris, France</p>

          <p>• 2023: StoryMi / CFI – Naija in Lights, Lagos, Nigeria</p>
          <p>• 2023: Photoville – New York</p>

          <p>
            • 2022: World Press / Everyday Projects Exhibition – Oldenburg,
            Germany
          </p>

          <p>• 2021: HPR 2022 Public Space Exhibition – Hamburg, Germany</p>

          <p>• 2020: Hidden Flows Exhibition – ICLEI Africa</p>

          <p>
            • 2019: Kigali Centre for Photography / VII Exhibition – Kigali,
            Rwanda
          </p>

          <p>
            • 2018: African Artists’ Foundation – Canon Alumni Exhibition,
            Lagos, Nigeria
          </p>
        </div>

        <div
          className="mb-10 mt-10 flex justify-center cursor-pointer"
          onClick={handleGoBack}
        >
          <IoMdArrowRoundBack
            style={{ width: "2rem", height: "2rem", marginRight: "1rem" }}
          />
          <div className="font-bold text-xl">Go Back</div>
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
