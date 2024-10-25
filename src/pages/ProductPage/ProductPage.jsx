import { Flex } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPageImage from "../../components/ProductPageImage/ProductPageImage";
import ProductInfoSection from "../../components/ProductInfoSection/ProductInfoSection";

export default function ProductPage() {
  const [productInfo, setProductInfo] = useState(false);
  const { id } = useParams();
  const publicLink = process.env.PUBLIC_URL

  useEffect(() => {
    const getProductInfo = async () => {
      try{
        const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProductInfo(data);
      }
      catch(err){
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
        setProductInfo(initialItem);
      }
      
    };
    getProductInfo();
  }, [id]);

  return (
    <Flex
      m={"5"}
      direction={{ initial: "column", sm: "row" }}
      justify={{ sm: "center", initial: "start" }}
      align={{ sm: "start", initial: "center" }}
    >
      {productInfo.images ? (
        <ProductPageImage images={productInfo.images} />
      ) : null}
      <ProductInfoSection productInfo={productInfo} />
    </Flex>
  );
}
