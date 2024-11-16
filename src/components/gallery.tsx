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
  photos: PhotoMetadata[];
  backButton?: ReactNode;
}

export function Gallery({
  category,
  alt,
  title,
  essay,
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

  return (
    <>
      <style>{`
        p {
          margin: 0 0 30px 0;
          font-size: 18px;
        }

        #sandbox-title {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          border-top: 1px dotted var(--accent);
          background: rgba(255, 255, 255, 0.7);
          background-size: 4px 4px;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          -moz-backdrop-filter: blur(4px);
          font-size: 14px;
          line-height: 14px;
        }

        #sandbox-title svg {
          margin-right: 20px;
        }

        #sandbox-title a {
          text-decoration: none;
          color: var(--accent);
        }

        #progress {
          position: fixed;
          top: 20px;
          left: 20px;
          transform: rotate(-90deg);
        }

        circle {
          stroke-dashoffset: 0;
          stroke-width: 15%;
          fill: none;
        }

        .bg {
          stroke: var(--accent);
          opacity: 0.3;
        }

        #progress .indicator {
          stroke: var(--accent);
        }

        section {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          perspective: 500px;
        }

        section > div {
          aspect-ratio: 4/3;
          height: 80vh;
          position: relative;
          max-height: 90vh;
          overflow: hidden;
        }

        img {
          position: absolute;
          top: 14px;
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
          margin-right:8rem;
          margin-left:28rem;
        }

        .back {
          padding: 100px;
          display: flex;
          justify-content: center;
          align-self: center;
        }

        @media (max-width: 768px) {

          section > div {
            margin: 10px;
          }

          img {
            object-fit: cover;
          }
        }
      `}</style>
      <article>
        <h1 className="text-center lg:text-8xl font-bold text-[3rem] mt-20 mb-5">
          {title}
        </h1>
        {essay ? <HtmlRenderer htmlContent={essay} className="lg:ml-20 ml-2" /> : null}
        {photos.map(({ aspectRatio, description }, index) => (
          <>
            <Image
              category={category}
              index={index + 1}
              alt={alt}
              aspectRatio={aspectRatio}
              key={index}
            />
            {description ? (
              <h5 className="text-center">{description}</h5>
            ) : null}
          </>
        ))}
        <motion.div className="progress" style={{ scaleX }} />
        {backButton ? (
          <div
            className="mb-20 flex justify-center cursor-pointer"
            onClick={handleGoBack}
          >
            <IoMdArrowRoundBack style={{ width: "2rem", height: "2rem" }} />
            <div className="font-bold text-2xl">Back To Galleries</div>
          </div>
        ) : null}
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
