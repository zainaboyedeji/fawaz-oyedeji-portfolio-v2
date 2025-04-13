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
  arrow?: ReactNode;
}

export function Gallery({
  category,
  alt,
  title,
  essay,
  date,
  photos,
  backButton,
  arrow,
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
    <>
      <style>{`

        p {
          margin: 0 0 30px 0;
          font-size: 17px;
        }
        #progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 5px;
          background: var(--accent);
          width: 100%;
        }

        .full-screen-image {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          background-color: black;
        }

        .full-screen-image img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .description {
          position: absolute;
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 20px;
          text-align: center;
        }

        .back-button {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;
          cursor: pointer;
        }

        .back-button svg {
          margin-right: 10px;
          width: 24px;
          height: 24px;
        }
      

`}</style>

      <article className="mt-10">
        <div className="flex lg:ml-20 ml-2">
          {arrow && (
            <div className="back-button" onClick={handleGoBack}>
              <IoMdArrowRoundBack />
            </div>
          )}
          {title && (
            <h1 className="w-full justify-center text-center lg:text-6xl font-bold text-[3rem] lg:mt-4 mb-5 mt-20">
              {title}
            </h1>
          )}
        </div>

        {essay && (
          <HtmlRenderer
            htmlContent={essay}
            className="lg:ml-20 lg:mr-10 ml-2"
          />
        )}
        {date && <div className="lg:ml-20 ml-2 font-bold text-lg">{date}</div>}

        <section className="lg:ml-10 lg:mr-10 lg:mt-8">
          {photos.map(({ aspectRatio, description }, index) => (
            <div key={index} className="full-screen-image">
              <Image
                category={category}
                index={index + 1}
                alt={alt}
                aspectRatio={aspectRatio}
              />
              {description && <div className="description">{description}</div>}
            </div>
          ))}
        </section>
        <motion.div
          className="fixed top-0 left-0 h-[5px] bg-[var(--accent)] w-full"
          style={{ scaleX }}
        />
        {backButton && (
          <div className="back-button" onClick={handleGoBack}>
            <IoMdArrowRoundBack />
            <span>Back To Galleries</span>
          </div>
        )}
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
      </article>
    </>
  );
}
