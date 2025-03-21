import { CartContextProvider } from "./context/CartContex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartDetail } from "./context/CartDetail";
import { Layout } from "./layout/Layout";
import { Inicio } from "./inicio/Inicio";

const QueComemosApp: React.FC = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/carrito" element={<CartDetail />} />
          </Routes>
        </Layout>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default QueComemosApp;
