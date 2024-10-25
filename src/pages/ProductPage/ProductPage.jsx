import { Flex } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPageImage from "../../components/ProductPageImage/ProductPageImage";
import ProductInfoSection from "../../components/ProductInfoSection/ProductInfoSection";

export default function ProductPage() {
  const [productInfo, setProductInfo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getProductInfo = async () => {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProductInfo(data);
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
