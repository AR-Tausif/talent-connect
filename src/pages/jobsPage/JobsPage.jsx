import { useEffect, useState } from "react";
import Job from "../../components/shared/jobs/Job";

const JobsPage = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => setJobs(data.data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto">
            {
                jobs.map(job => <Job key={job._id} job={job} />)
            }
        </div>
    );
};

export default JobsPage;