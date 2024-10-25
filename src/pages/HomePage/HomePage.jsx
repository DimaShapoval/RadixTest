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
          if(items.images.length >= 3){
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
          }
          else{
            return null;
          }
          
        })
      );
    }
  }, [allProducts]);
  return (
    <Grid
      columns={"repeat(auto-fit, minmax(300px, 350px)"}
      justify={'center'}
      gap={"6"}
      m={"5"}
      width="auto"
    >
      {cards ? cards : null}
    </Grid>
  );
}
