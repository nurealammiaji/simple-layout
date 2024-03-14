import Bandwidth from "./Bandwidth/Bandwidth";
import Graph from "./Graph/Graph";
import GraphBlocks from "./GraphBlocks/GraphBlocks";
import Header from "./Header/Header";
import InfoBlocks from "./InfoBlocks/InfoBlocks";
import Percentages from "./Percentages/Percentages";

const SideBody = () => {
    return (
        <div className="h-full min-h-screen bg-slate-100">
            <div>
                <Header />
            </div>
            <div className="flex flex-wrap gap-5 p-5">
                <div className="flex w-full gap-5">
                    <div className="w-1/2">
                        <Bandwidth />
                    </div>
                    <div className="w-1/2">
                        <InfoBlocks />
                    </div>
                </div>
                <div className="flex w-full gap-5">
                    <div className="w-1/2">
                        <GraphBlocks />
                    </div>
                    <div className="w-1/2">
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