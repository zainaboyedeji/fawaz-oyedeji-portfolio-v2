import { IoMdArrowRoundBack } from "react-icons/io";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Image } from "./image";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export interface PhotoMetadata {
  aspectRatio: string;
}

interface Props {
  alt: string;
  category: string;
  title: string;
  titleWidth: number;
  photos: PhotoMetadata[];
}

export function Gallery({ category, alt, title, titleWidth, photos }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isPresent = useIsPresent();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

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
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          // scroll-snap-align: center;
          perspective: 500px;
        }

        section > div {
          aspect-ratio: 4/3;
          height: 80vh;
          position: relative;
          max-height: 90vh;
          margin: 20px;
          overflow: hidden;
        }

        img {
          position: absolute;
          top: 0px;
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
          margin-right:9rem;
          margin-left:28rem;
        }

        .back {
          padding: 100px;
          display: flex;
          justify-content: center;
          align-self: center;
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
      <article style={{ paddingTop: "80px" }}>
        <h1 className="text-center text-8xl font-bold">{title}</h1>
        {photos.map(({ aspectRatio }, index) => (
          <Image
            category={category}
            index={index + 1}
            alt={alt}
            aspectRatio={aspectRatio}
            key={index}
          />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
        <div className="mb-20 flex justify-center" onClick={handleGoBack}>
          <IoMdArrowRoundBack style={{ width: "5rem", height: "2rem" }} />
          <Link to="/" className="font-bold text-2xl">
            Back To Galleries
          </Link>
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
      </article>
    </>
  );
}
