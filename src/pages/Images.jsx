import Picture1 from "../../public/images/collage/sym_poster.jpg";
import Picture2 from "../../public/images/collage/img2.jpg";
import Picture3 from "../../public/images/collage/img3.jpg";
import Picture4 from "../../public/images/collage/img4.jpg";
import Picture5 from "../../public/images/collage/img5.jpg";
import Picture6 from "../../public/images/collage/img6.jpg";
import Picture7 from "../../public/images/collage/img1.jpg";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Images() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 2]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="container max-sm:hidden">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="el">
              <div className="imageContainer">
                <img src={src} fill alt="image" placeholder="blur" loading="lazy"/>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
