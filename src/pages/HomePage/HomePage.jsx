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
      setCard(
        data.map((items) => {
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
        })
      );
    }
  }, [allProducts]);
  return (
    <Grid
      columns={"repeat(auto-fit, minmax(300px, 1fr)"}
      gap={"6"}
      m={"5"}
      width="auto"
    >
      {cards ? cards : null}
    </Grid>
  );
}
