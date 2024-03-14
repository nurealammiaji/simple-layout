
const InfoBlocks = () => {
    return (
        <div className="flex flex-wrap h-[250px] gap-5">
            <div className="flex w-[100%] gap-5">
                <div className="w-[100%] bg-blue-300">
                    <h6 className="p-2 text-sm text-white">Reports Generated</h6>
                </div>
                <div className="w-[100%] bg-blue-900">
                    <h6 className="p-2 text-sm text-white">Profiles</h6>
                </div>
            </div>
            <div className="flex w-[100%] gap-5">
                <div className="w-[100%] bg-green-300">
                    <h6 className="p-2 text-sm text-white">Bugs Fixed</h6>
                </div>
                <div className="w-[100%] bg-red-500">
                    <h6 className="p-2 text-sm text-white">Total Views</h6>
                </div>
            </div>
        </div>
    );
};

export default InfoBlocks;