import Company from "./Company";

const FeaturedCompanies = () => {
    return (
        <div className="p-6 border rounded-lg mt-5">
            <h2 className="text-2xl font-semibold my-4">Featured Company</h2>
            <div className="">
                <Company />
                <Company />
                <Company />
            </div>
        </div>
    );
};

export default FeaturedCompanies;