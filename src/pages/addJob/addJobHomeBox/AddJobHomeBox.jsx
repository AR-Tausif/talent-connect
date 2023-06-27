import { FaShoppingBag } from "react-icons/fa"

const AddJobHomeBox = () => {
    return (
        <div className="bg-white py-5 pb-12 rounded-lg">
            <h3 className="text-2xl pb-7 font-semibold">Post Job</h3>
            <div className="mx-16 flex flex-wrap justify-between">
                <div className="flex items-center gap-6">
                    <div className="bg-gray-300 p-3 rounded-full">
                        <FaShoppingBag className="text-2xl text-purple-600" />
                    </div>
                    <h5 className="text-2xl">Job Detail</h5>
                </div>
                <div className="flex items-center gap-6">
                    <div className="bg-gray-300 p-3 rounded-full">
                        <FaShoppingBag className="text-2xl text-purple-600" />
                    </div>
                    <h5 className="text-2xl">Payments</h5>
                </div>
                <div className="flex items-center gap-6">
                    <div className="bg-gray-300 p-3 rounded-full">
                        <FaShoppingBag className="text-2xl text-purple-600" />
                    </div>
                    <h5 className="text-2xl">Confirmation</h5>
                </div>
            </div>
        </div>
    );
};

export default AddJobHomeBox;