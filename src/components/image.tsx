import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
interface Props {
  alt: string;
  category: string;
  index: number;
  aspectRatio: string;
}

export function Image({ alt, category, index, aspectRatio }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
       <section>
      <div ref={ref} style={{ aspectRatio }}>
        <img src={`/${category}-${index}.jpg`} alt={alt} />
      </div>
    </section>
  );
}
