
const Sidebar = () => {
    return (
        <ul className="h-full p-4 text-gray-400 bg-slate-700">
            <li>
                <h4 className="font-semibold">PRO VERSION</h4>
            </li>
            <li className="mt-2">
                <h5 className="ml-3 text-sm">Upgrade to Pro</h5>
            </li>
            <li className="mt-4">
                <h4 className="font-semibold">MENU</h4>
            </li>
            <li className="mt-2">
                <h5 className="ml-3 text-sm">Example Dashboard</h5>
            </li>
        </ul>
    );
};

export default Sidebar;