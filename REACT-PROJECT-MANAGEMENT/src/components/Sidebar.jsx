function Sidebar () {
    return (
        <aside className="w-1/3 flex flex-col gap-4 bg-stone-900 text-stone-50 px-8 py-16 md:w-72">
            <h2 className="font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
            <div>
                <button className="bg-stone-700 text-stone-400 px-4 py-2 rounded-md text-xs md:text-base hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
            </div>
            <ul>
            </ul>
        </aside>
    );
}

export default Sidebar;