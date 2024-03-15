
const GraphBlocks = () => {
    return (
        <div className="md:h-[250px] h-full flex-row md:flex gap-5">
            <div className="bg-white md:w-1/2 h-[125px] md:h-full mb-5 md:mb-0">
                <h6 className="p-2">Total Views</h6>
            </div>
            <div className="bg-white md:w-1/2 h-[125px] md:h-full mb-5 md:mb-0">
                <h6 className="p-2">Report Submitted</h6>
            </div>
        </div>
    );
};

export default GraphBlocks;