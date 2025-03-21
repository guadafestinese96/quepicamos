import { Banner } from "../banner/Banner"
import { MenuComida } from "../menuComida/MenuComida"

export const Inicio =()=>{
    return(
        <div className="inicioContainer">
            <Banner/>
            <MenuComida/>
        </div>
        
    )
}