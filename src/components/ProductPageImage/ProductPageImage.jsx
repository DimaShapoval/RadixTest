import { Box } from "@radix-ui/themes";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProductPageImage({ images }) {
  return (
    <Box maxWidth={"500px"}>
        <Carousel showStatus={false} showIndicators={false}>
        {images.map((imageSrc, index) => {
          return (
            <img
              key={index}
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
