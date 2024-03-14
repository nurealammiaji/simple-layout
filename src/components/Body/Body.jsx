import Sidebar from "../Sidebar/Sidebar";

const Body = () => {
    return (
        <div className="flex">
            <div className="w-[30%]">
                <Sidebar />
            </div>
            <div className="w-[70%]">

            </div>
        </div>
    );
};

export default Body;