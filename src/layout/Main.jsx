import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            Hi there im little bit a vs code
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;