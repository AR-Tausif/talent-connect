import PrimaryButton from "../buttons/PrimaryButton";


const JobStartBox = () => {
    return (
        <div className="bg-gray-200 p-8 text-center space-y-3 rounded-lg">
            <h3 className="text-2xl text-black font-bold">Post a Job Today</h3>
            <p className="text-[18px]">Everyday 10,000+ potential clients visit our website. Hire exclusive talent by posting your job today.</p>
            <PrimaryButton />
        </div>
    );
};

export default JobStartBox;