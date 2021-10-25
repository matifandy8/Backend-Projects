import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({children}: {children: ReactNode}): JSX.Element  => {
  return (
      <>
       <Navbar/>
       {children}
       <Footer/>
       </>
  );
};

export default Layout;