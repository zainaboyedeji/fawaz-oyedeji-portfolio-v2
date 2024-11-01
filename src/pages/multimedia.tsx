import { motion, useIsPresent } from "framer-motion";

function Multimedia() {
  const isPresent = useIsPresent();
  return (
    <>
      <div className="mt-24">
        <div className="flex h-[60vh]">
          <iframe
            title="vimeo video"
            src="https://player.vimeo.com/video/1019928845"
            className="w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
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

export default Multimedia;
