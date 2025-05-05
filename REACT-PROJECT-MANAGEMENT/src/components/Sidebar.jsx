import Button from "./Button";

function Sidebar ({onStartAddProject}) {
    return (
        <aside className="w-1/3 flex flex-col gap-4 bg-stone-900 text-stone-50 px-8 py-16 md:w-72">
            <h2 className="font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul>
            </ul>
        </aside>
    );
}

export default Sidebar;