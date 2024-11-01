import { motion, useIsPresent } from "framer-motion";

function ContactMe() {
  const isPresent = useIsPresent();
  return (
    <>
    <div className="mt-24">
      <div className="py-4 md:py-9 px-4">
        <p className="text-center text-sm md:text-base">
          For inquiries regarding availability for commissions, image licensing, and print purchase, please contact.
        </p>
      </div>

      <div className="py-4 md:py-9 px-4">
        <h1 className="text-center text-lg md:text-xl font-bold">
          FAWAZ OYEDEJI.
        </h1>
      </div>

      <div className="py-4 md:py-9 px-4">
        <p className="text-center text-sm md:text-base">
          email:
          <a
            className="ml-1 text-gray-400 underline"
            href="mailto:contactfawazoyedeji@gmail.com"
          >
            contactfawazoyedeji@gmail.com
          </a>
        </p>
        <p className="text-center text-sm md:text-base mt-2">
          telephone: +234-90-93173219
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

export default ContactMe;
