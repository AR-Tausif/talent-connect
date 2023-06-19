import PrimaryButton from "../../../components/buttons/PrimaryButton";

const Banner = () => {
    return (
        <div className=" text-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center"
            >
                <div className="mx-auto w-2/3 text-center">
                    <h1
                        className="text-[72px] leading-tight font-semibold text-black sm:text-[72px]"
                    >
                        Build & ship a job
                        board fast with Framer
                    </h1>

                    <p className="mx-auto mt-4 sm:text-xl/relaxed text-[18px] text-black">
                        Shifter is the largest job directory in the world. With over 2M visitors month, Shifter is the number one destination to find and list incredible jobs for tech industries.
                    </p>

                    <div className="mt-5 flex flex-wrap justify-center gap-4">
                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;