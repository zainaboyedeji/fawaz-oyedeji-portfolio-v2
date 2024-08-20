import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
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
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

function LandingPage() {
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
          font-size: 56px;
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
          width: 300px;
          height: 400px;
          position: relative;
          max-height: 90vh;
          margin: 20px;
          background: var(--white);
          overflow: hidden;
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
      `}</style>

      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((image) => (
          <Image id={image} key={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </>
  );
}

export default LandingPage;
