import { ReactNode } from "react";
import { Header } from "../header/Header";
import "./Layout.css";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layoutContainer">
      <Header />
      {children}
    </div>
  );
};
