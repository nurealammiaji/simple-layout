import Bandwidth from "./Bandwidth/Bandwidth";
import Header from "./Header/Header";
import InfoBlocks from "./InfoBlocks/InfoBlocks";

const SideBody = () => {
    return (
        <div className="min-h-screen bg-slate-100">
            <Header />
            <div className="flex gap-5 p-5">
                <div className="w-[50%]">
                    <Bandwidth />
                </div>
                <div className="w-[50%]">
                    <InfoBlocks />
                </div>
            </div>
        </div>
    );
};

export default SideBody;