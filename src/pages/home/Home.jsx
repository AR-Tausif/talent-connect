import Banner from "./banner/Banner";
import JobHome from "./jobHome/MainContent";

const Home = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-6">
                <Banner />
                <JobHome />
            </div>
        </div>
    );
};

export default Home;