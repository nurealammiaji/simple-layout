
const GraphBlocks = () => {
    return (
        <div className="h-[250px] flex-row md:flex gap-5">
            <div className="bg-white md:w-1/2 h-[125px] md:h-full">
                <h6 className="p-2">Total Views</h6>
            </div>
            <div className="bg-white md:w-1/2 h-[125px] md:h-full">
                <h6 className="p-2">Report Submitted</h6>
            </div>
        </div>
    );
};

export default GraphBlocks;