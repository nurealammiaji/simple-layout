import SideBody from "../SideBody/SideBody";
import Sidebar from "../Sidebar/Sidebar";

const Body = () => {
    return (
        <div className="flex">
            <div className="w-[25%]">
                <Sidebar />
            </div>
            <div className="w-[75%]">
                <SideBody />
            </div>
        </div>
    );
};

export default Body;