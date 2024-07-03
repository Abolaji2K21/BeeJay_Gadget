import Navbar from "../navbar/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../footer/footer";
import HeroPage from "../../pages/HeroPage";


const Layout = () => {
    return(
        <>
           <HeroPage/>
            <Outlet/>
            <Footer/>
        </>

    )

}
export default Layout;