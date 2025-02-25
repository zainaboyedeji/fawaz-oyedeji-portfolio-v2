import { IoMdArrowRoundBack } from "react-icons/io";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Image } from "./image";
import { ReactNode } from "react";
import { HtmlRenderer } from "./htmlRenderer";

export interface PhotoMetadata {
  aspectRatio: string;
  description?: string;
}

interface Props {
  alt: string;
  category: string;
  title?: string;
  essay?: string;
  date?: string;
  photos: PhotoMetadata[];
  backButton?: ReactNode;
}

export function Gallery({
  category,
  alt,
  title,
  essay,
  date,
  photos,
  backButton,
}: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isPresent = useIsPresent();

  const handleGoBack = () => {
    window.history.back();
  };
  console.log("Date Prop:", date);

  return (
    <article className="p-4 lg:p-10">
      {title && (
        <div className="flex items-center lg:ml-20 ml-2 mt-20 lg:mt-0">
          <div className="flex items-center cursor-pointer mr-2 mt-5 lg:mt-0" onClick={handleGoBack}>
            <IoMdArrowRoundBack className="w-6 h-6" />
          </div>
          <h1 className="text-center w-full text-3xl md:text-4xl lg:text-6xl font-bold mt-10 lg:mt-4 mb-5">
            {title}
          </h1>
        </div>
      )}

      {essay && (
        <HtmlRenderer htmlContent={essay} className="lg:ml-20 ml-2 text-base md:text-lg" />
      )}
      {date && <div className="lg:ml-20 ml-2 font-bold text-lg">{date}</div>}

      <section className="lg:ml-20 lg:mr-20">
        {photos.map(({ aspectRatio, description }, index) => (
          <div key={index} className="flex flex-col items-center justify-center h-screen w-full relative bg-black overflow-hidden">
            <Image
              category={category}
              index={index + 1}
              alt={alt}
              aspectRatio={aspectRatio}
            />
            {description && (
              <div className="absolute text-white bg-black/50 p-3 md:p-4 rounded-md text-center text-sm md:text-lg">
                {description}
              </div>
            )}
          </div>
        ))}
      </section>

      <motion.div className="fixed top-0 left-0 h-[5px] bg-[var(--accent)] w-full" style={{ scaleX }} />

      {backButton && (
        <div className="flex items-center justify-center cursor-pointer mt-5" onClick={handleGoBack}>
          <IoMdArrowRoundBack className="mr-2 w-6 h-6" />
          <span className="text-lg font-semibold">Back To Galleries</span>
        </div>
      )}

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed inset-0 bg-black opacity-50"
      />
    </article>
  );
}
