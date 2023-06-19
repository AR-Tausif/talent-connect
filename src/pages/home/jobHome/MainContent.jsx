import FeaturedCompanies from "../../../components/boxes/FeaturedCompanies";
import JobStartBox from "../../../components/boxes/JobStartBox";
import AsideBar from "../asideBar/AsideBar";


const JobHome = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-11">
                <div className="col-span-4">
                    <AsideBar />
                </div>
                <div className="col-span-2">
                    <JobStartBox />
                    <FeaturedCompanies />
                </div>

            </div>
        </div>
    );
};

export default JobHome;