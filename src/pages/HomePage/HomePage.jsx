import { Grid } from "@radix-ui/themes";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../App";
import Cards from "../../components/Cards/Cards";

export default function HomePage() {
  const allProducts = useContext(ApiContext);
  const [cards, setCard] = useState(null);
  useEffect(() => {
    if (allProducts) {
      const { data } = allProducts;
      const newArrayOfProducts = data
        .map((items) => {
          if (items.images.length >= 3) {
            return (
              <Cards
                key={items.id}
                title={items.title}
                description={items.description}
                price={items.price}
                image={items.images[0]}
                id={items.id}
              />
            );
          } else {
            return undefined;
          }
        })
        .filter((item) => item !== undefined);
      if (newArrayOfProducts.length === 0) {
        let publicLink = process.env.PUBLIC_URL;
        let initialItem = {
          id: 11111,
          title: 'Headphones Level',
          category: {
            name: "Electronics",
          },
          description:
            "Level Headphones offer an exceptional audio experience with premium sound quality, designed for comfort and extended wear. Equipped with advanced noise-canceling technology, these headphones allow you to immerse yourself fully in your favorite music or podcasts without distraction. The sleek, modern design features durable materials, a comfortable headband, and soft ear cushions, ensuring a snug fit for hours of listening. With high-fidelity sound, deep bass, and clear treble, Level Headphones provide an outstanding audio experience, whether you’re working, traveling, or relaxing. Stay connected on the go with built-in Bluetooth and intuitive touch controls, making it easy to adjust volume, change tracks, and take calls with ease.",
          images: [`${publicLink}/productImages/1.jpg`, `${publicLink}/productImages/2.jpg`, `${publicLink}/productImages/3.jpg`],
          price: 50
        };
        newArrayOfProducts.push(<Cards
          key={initialItem.id}
          title={initialItem.title}
          description={initialItem.description}
          price={initialItem.price}
          image={initialItem.images[0]}
          id={initialItem.id}
        />)
      }

      setCard(newArrayOfProducts);
    }
  }, [allProducts]);
  return (
    <Grid
      columns={"repeat(auto-fit, minmax(300px, 350px)"}
      justify={"center"}
      gap={"6"}
      m={"5"}
      width="auto"
    >
      {cards ? cards : null}
    </Grid>
  );
}
