import Job from "../../../components/shared/jobs/Job";

const AsideBar = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-800">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    </div>
                    <input type="text" id="table-search-users" className="block p-6 shadow-lg mb-6 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-semibold">Featured Job Posts</h2>
                <div className="">
                    <Job />
                    <Job />
                    <Job />
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-3xl font-semibold">Recent Job Posts</h2>
                <div className="">
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                </div>
                <h4 className="text-xl my-9">{"See all Job Post ---->"} </h4>
            </div>
        </div>
    );
};

export default AsideBar;