import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useIsPresent,
  useSpring,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt={`#00${id}`} />
      </div>
      <motion.h2 style={{ y }}>{`#0${id}`}</motion.h2>
    </section>
  );
}

function LandingPage() {
  const isPresent = useIsPresent();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <style>{`
        h2 {
          margin: 0;
          color: var(--accent);
          left: calc(50% + 130px);
          font-size: 100px;
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
          width: 100%;
          height: 100%;
          position: relative;
          max-height: 90vh;
          margin: 20px;
          overflow: hidden;
        }

        img {
          position: absolute;
          top: 50px;
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

        @media (max-width: 768px) {
          h2 {
            font-size: 50px;
            left: calc(50% + 20px);
          }

          section > div {
            margin: 10px;
          }

          img {
            object-fit: cover;
          }
        }
      `}</style>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((image) => (
          <Image id={image} key={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
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

export default LandingPage;
