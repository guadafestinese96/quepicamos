import { Banner } from "./banner/Banner";
import { Header } from "./header/Header";
import { MenuComida } from "./menuComida/MenuComida";
import { CartContextProvider } from "./context/CartContex";

const QueComemosApp: React.FC = ()=>{

    return(
        <CartContextProvider>
        <div>
            <Header/>
            <Banner/>
            <MenuComida/>
        </div>
        </CartContextProvider>
    )
}

export default QueComemosApp;