import { Box, Grid } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProductPageImage({ images }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    setActiveImage(images[0]);
  }, []);
  return (
    <Box maxWidth={"500px"}>
        <Carousel showStatus={false} showIndicators={false}>
        {images.map((imageSrc, index) => {
          return (
            <img
              key={index}
              onClick={() => setActiveImage(imageSrc)}
              style={{ width: "100%", borderRadius: "var(--radius-2)", cursor: 'pointer' }}
              alt="Child product images"
              src={imageSrc}
            />
          );
        })}
        </Carousel>
    </Box>
  );
}
