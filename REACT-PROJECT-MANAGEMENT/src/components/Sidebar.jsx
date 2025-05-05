import Button from "./Button";

function Sidebar ({onStartAddProject, onSelectProject, projects, selectProjectID}) {
    return (
        <aside className="w-1/3 flex flex-col gap-4 bg-stone-900 text-stone-50 px-8 py-16 md:w-72">
            <h2 className="font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul>
                {projects.map((project)=>{
                    return <li key={project.id}>
                        <button onClick={()=>{
                            onSelectProject(project.id)
                        }} className={`w-full text-left px-2 py-1 rounded-md my-1 ${project.id===selectProjectID? 'bg-stone-800 text-stone-200':'text-stone-400'} hover:text-stone-200 hover:bg-stone-800`}>{project.title}</button>
                    </li>
                })}
            </ul>
        </aside>
    );
}

export default Sidebar;