
const Sidebar = () => {
    return (
        <ul className="h-full min-h-screen p-4 text-white bg-slate-700">
            <li>
                <h4 className="font-medium">PRO VERSION</h4>
            </li>
            <li className="mt-2">
                <h5 className="ml-3 text-sm">Upgrade to Pro</h5>
            </li>
            <li className="mt-3">
                <h4 className="font-medium">MENU</h4>
            </li>
            <li className="mt-2">
                <h5 className="ml-3 text-sm">Example Dashboard</h5>
            </li>
        </ul>
    );
};

export default Sidebar;