import { useRef } from "react";

interface Props {
  alt: string;
  category: string;
  index: number;
  aspectRatio: string;
}

export function Image({ alt, category, index, aspectRatio }: Props) {
  const ref = useRef(null);
  return (
    <section>
      <div ref={ref} style={{ aspectRatio }}>
        <img src={`/${category}-${index}.jpg`} alt={alt} />
      </div>
    </section>
  );
}
