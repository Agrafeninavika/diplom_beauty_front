import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export const cartContext = createContext(null);
const Page = () => {
  const [cartList, setCartList] = useState([]);

  return (
    <cartContext.Provider value={{ cartList, setCartList }}>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </cartContext.Provider>
  );
};

export default Page;
