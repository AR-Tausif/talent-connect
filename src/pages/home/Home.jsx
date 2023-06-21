import { ToastContainer } from "react-toastify";
import Banner from "./banner/Banner";
import JobHome from "./jobHome/MainContent";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <Banner />
            <JobHome />
        </div>
    );
};

export default Home;