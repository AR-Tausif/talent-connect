import { NavLink } from "react-router-dom";

const Job = ({ job }) => {
    console.log(job);
    return (
        <NavLink to={`/jobs/${job._id}`}>
            <div className="flex justify-between items-center mt-7 hover:bg-gray-50 shadow-sm py-5 px-6 rounded-lg border cursor-pointer">
                <div className="flex items-center gap-5">
                    <img className="w-20" src={job.company.logo} alt="Apple Watch" />
                    <div className="space-y-3">
                        <h2 className="text-[16px] font-medium text-[#5f6a76]">{job.company.companyName}</h2>
                        <h2 className="text-[16px] font-bold text-[#394047] ">Head of Design</h2>
                    </div>
                </div>
                <div className="">
                    <div className="space-y-3">
                        <h2 className="text-[16px] font-semibold text-[#4e5863]">Full Time / Remote</h2>
                        <h2 className="text-[16px] font-medium text-[#5f6a76]">May 16 2023</h2>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Job;