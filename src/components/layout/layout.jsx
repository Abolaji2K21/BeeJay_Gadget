import Navbar from "../navbar/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../footer/footer";


const Layout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>

    )

}
export default Layout;