import PrimaryButton from "../../../components/buttons/PrimaryButton";

const Banner = () => {
    // bg-gradient-to-t from-indigo-500 via-gray-200 to-white
    return (
        <div className=" text-white bg-gradient-to-b from-white  via-indigo-200 to-indigo-700">
            <div className="bg-gradient-to-b from-white  via-purple-200  to-purple-500 ">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center"
                >
                    <div className="mx-auto w-2/3 text-center">
                        <h1
                            className="text-[72px] leading-tight font-semibold text-black sm:text-[72px] bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent"
                        >
                            Get a job
                            board fast with Talent Connect
                        </h1>

                        <p className="mx-auto mt-4 sm:text-xl/relaxed text-[18px] text-black">
                            Talent Connect is the largest job directory in the world. With over 2M visitors month, Talent Connect is the number one destination to find and list incredible jobs for tech industries.
                        </p>

                        <div className="mt-5 flex flex-wrap justify-center gap-4">
                            <PrimaryButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;