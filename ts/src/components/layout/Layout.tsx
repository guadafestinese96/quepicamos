
import { ReactNode } from "react"
import { Header } from "../header/Header"

export const Layout = ({children}: {children:ReactNode})=>{
    return(
        <div className="layoutContainer">
            <Header/>
            {children}
        </div>
    )
}