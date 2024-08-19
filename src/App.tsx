import "./index.css";
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
        <img src={`/${id}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flexTest">
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis consequatur aperiam corrupti explicabo illum, incidunt illo repudiandae atque labore ratione asperiores harum, necessitatibus culpa, adipisci ad ex in rerum natus deleniti itaque earum numquam quos. Quisquam modi commodi eius eos corrupti, provident eaque accusantium! Molestias esse in nobis tempore facilis dolore eaque. Ut distinctio dolor minus? Veritatis quas pariatur cumque! Quas autem, numquam veritatis repellat ut minima at? Nulla qui provident eligendi laudantium non! Laboriosam non vel ea? Impedit, accusamus. Veritatis delectus debitis atque accusamus ex modi recusandae ipsum enim blanditiis exercitationem ut iste consectetur provident, deleniti architecto dolor.    </p>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((image) => (
          <Image id={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </div>
  );
}
