
const InfoBlocks = () => {
    return (
        <div className="flex flex-wrap h-[250px] gap-5">
            <div className="flex w-[100%] gap-5">
                <div className="w-[100%] bg-blue-300"></div>
                <div className="w-[100%] bg-blue-900"></div>
            </div>
            <div className="flex w-[100%] gap-5">
                <div className="w-[100%] bg-green-300"></div>
                <div className="w-[100%] bg-red-500"></div>
            </div>
        </div>
    );
};

export default InfoBlocks;