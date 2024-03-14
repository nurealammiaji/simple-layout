import Bandwidth from "./Bandwidth/Bandwidth";
import Graph from "./Graph/Graph";
import GraphBlocks from "./GraphBlocks/GraphBlocks";
import Header from "./Header/Header";
import InfoBlocks from "./InfoBlocks/InfoBlocks";
import Percentages from "./Percentages/Percentages";

const SideBody = () => {
    return (
        <div className="h-full bg-slate-100">
            <div>
                <Header />
            </div>
            <div className="flex-row flex-wrap gap-5 p-5 md:flex">
                <div className="flex-row w-full gap-5 md:flex">
                    <div className="mb-5 md:w-1/2 md:mb-0">
                        <Bandwidth />
                    </div>
                    <div className="mb-5 md:w-1/2 md:mb-0">
                        <InfoBlocks />
                    </div>
                </div>
                <div className="flex-row w-full gap-5 md:flex">
                    <div className="mb-5 md:w-1/2 md:mb-0">
                        <GraphBlocks />
                    </div>
                    <div className="mb-5 md:w-1/2 md:mb-0">
                        <Graph />
                    </div>
                </div>
                <div className="w-full">
                    <Percentages />
                </div>
            </div>
        </div>
    );
};

export default SideBody;