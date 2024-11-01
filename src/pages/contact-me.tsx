import { motion, useIsPresent } from "framer-motion";

function ContactMe() {
  const isPresent = useIsPresent();
  return (
    <>
      <div className="mt-24">
      <p className="text-center">
          Use the form or email to enquire about rates and availability, or you
          can just email me to say hi.
        </p>

        <div className="flex">
          <div>ee</div>
          <div>ee</div>

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
