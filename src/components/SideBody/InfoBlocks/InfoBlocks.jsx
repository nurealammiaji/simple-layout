
const InfoBlocks = () => {
    return (
        <div className="flex-row md:flex flex-wrap h-full md:h-[350px] gap-5">
            <div className="flex-row w-full gap-5 md:flex">
                <div className="w-full md:h-full h-[87.5px] bg-blue-300 mb-5 md:mb-0">
                    <h6 className="p-2 text-sm text-white">Reports Generated</h6>
                </div>
                <div className="w-full md:h-full h-[87.5px] bg-blue-900 mb-5 md:mb-0">
                    <h6 className="p-2 text-sm text-white">Profiles</h6>
                </div>
            </div>
            <div className="flex-row w-full gap-5 md:flex">
                <div className="w-full md:h-full h-[87.5px] bg-green-300 mb-5 md:mb-0">
                    <h6 className="p-2 text-sm text-white">Bugs Fixed</h6>
                </div>
                <div className="w-full md:h-full h-[87.5px] bg-red-500 mb-5 md:mb-0">
                    <h6 className="p-2 text-sm text-white">Total Views</h6>
                </div>
            </div>
        </div>
    );
};

export default InfoBlocks;