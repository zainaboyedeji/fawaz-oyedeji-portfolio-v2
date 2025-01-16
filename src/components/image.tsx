import { useRef, useState } from "react";

interface Props {
  alt: string;
  category: string;
  index: number;
  aspectRatio: string;
}

export function Image({ alt, category, index, aspectRatio }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [imageType, setImageType] = useState("jpg"); 

  const handleImageError = () => {
    if (imageType === "jpg") {
      setImageType("png"); 
    }
  };

  return (
    <section>
      <div ref={ref} style={{ aspectRatio }}>
        <img
          src={`/${category}-${index}.${imageType}`}
          alt={alt}
          onError={handleImageError}
        />
      </div>
    </section>
  );
}
