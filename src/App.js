import { Flex, Heading, Theme } from "@radix-ui/themes";
import "./App.css";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cart from "./components/Cart/Cart";

export const ApiContext = createContext();

function App() {
  const [productInfo, setProductInfo] = useState(null);


  useEffect(() => {
    async function getProducts() {
      setProductInfo(
        await axios.get("https://api.escuelajs.co/api/v1/products")
      );
    }
    getProducts();
  }, []);
  return (
    <ApiContext.Provider value={productInfo} >
      <Theme>
        <div className="App">
          <header>
            <Flex width={"90%"} my={"4"} justify={"between"} align={"center"}>
              <Heading as="h2">
                <NavLink to={"/"}>
                  Radix Products
                </NavLink>
              </Heading>
              <Cart />
            </Flex>
          </header>
          <main>
            <Theme accentColor="gray">
              <Routing />
            </Theme>
          </main>
        </div>
      </Theme>
    </ApiContext.Provider>
  );
}

export default App;
