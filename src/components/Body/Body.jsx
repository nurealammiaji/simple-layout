import SideBody from "../SideBody/SideBody";
import Sidebar from "../Sidebar/Sidebar";

const Body = () => {
    return (
        <div className="flex-row md:flex">
            <div className="md:w-1/4">
                <Sidebar />
            </div>
            <div className="md:w-3/4">
                <SideBody />
            </div>
        </div>
    );
};

export default Body;