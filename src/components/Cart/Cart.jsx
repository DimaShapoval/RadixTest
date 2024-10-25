import { Box, Button, Flex, Heading, Text, Theme } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import CartItems from "./CartItems/CartItems";

export default function Cart() {
  const cartImageSrc = process.env.PUBLIC_URL + "/cartImage.svg";
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [deleteItemClicked, setDeleteItemClicked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (localStorage.cartInfo) {
      const data = JSON.parse(localStorage.cartInfo);
      setCartItems(data);
      setTotalPrice(
        data.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)
      );
    }
  }, [cartIsOpen, deleteItemClicked]);

  return (
    <Box>
      <Theme accentColor="gray" grayColor="state">
        <Button onClick={() => setCartIsOpen(true)} variant="soft" size={"2"}>
          <img
            style={{ height: "90%", transform: "scaleX(-1)" }}
            src={cartImageSrc}
            alt="Cart"
          />
        </Button>
      </Theme>
      <Theme accentColor="gray" grayColor="state">
        <Box
          width={"100%"}
          height={"100%"}
          position={"fixed"}
          top={"0"}
          right={cartIsOpen ? "0" : "-100%"}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "9999" }}
        >
          <Box
            width={{ initial: "100%", sm: "40%" }}
            height={"100%"}
            overflowY={"scroll"}
            top={"0"}
            position={"fixed"}
            right={cartIsOpen ? "0" : "-100%"}
            style={{
              backgroundColor: "rgba(64, 64, 64, 0.9)",
              borderRadius: "var(--radius-2)",
              zIndex: "99999",
              transition: "right 0.5s ease",
            }}
          >
            <Button
              onClick={() => setCartIsOpen(false)}
              variant="outline"
              width={"100%"}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="white"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
            <Heading
              as="h2"
              mt={"4"}
              align={"center"}
              style={{ color: "white" }}
            >
              Your cart
            </Heading>
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                return (
                  <CartItems
                    key={index}
                    title={item.title}
                    price={item.price}
                    color={item.color}
                    image={item.image}
                    quantity={item.quantity}
                    handleDelete={setDeleteItemClicked}
                    handleValue={deleteItemClicked}
                  />
                );
              })
            ) : (
              <Text
                as="p"
                size={"5"}
                align={"center"}
                mt={"4"}
                style={{ color: "white" }}
              >
                Your cart is empty...
              </Text>
            )}
            {cartItems && cartItems.length > 0 ? (
              <>
                <Text as="p" size={"5"} m={"4"} style={{ color: "white" }}>
                  Total price: {totalPrice} $
                </Text>
                <Flex justify={"center"} width={"100%"}>
                  <Button style={{ width: "90%" }} mb={"5"} size={"4"}>
                    Submit
                  </Button>
                </Flex>
              </>
            ) : null}
          </Box>
        </Box>
      </Theme>
      <style>
        {cartIsOpen ? `body { overflow: hidden; }` : `body { overflow: auto; }`}
      </style>
    </Box>
  );
}
