import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import NotFound from "./pages/NotFound/NotFound";

export default function Routing () {
    return(
        <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<ProductPage />} path="/product/:id" />
              <Route element={<NotFound />} path="*" />
            </Routes>
    )
}