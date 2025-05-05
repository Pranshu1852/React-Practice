import Task from "./Task";

function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {
    const formattedDate= new Date(project.dueDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })

    const filterTask=tasks.filter((task)=>{
        return task.projectId===project.id;
    })

    return (
        <div className="w-full p-16 flex flex-col gap-10">
            <header className="flex flex-col pb-5 gap-6 border-b-2 border-stone-950">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
                    <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Task onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={filterTask}/>
        </div>
    );
}

export default SelectedProject;