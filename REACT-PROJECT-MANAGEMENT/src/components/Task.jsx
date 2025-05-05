import NewTask from "./NewTask";

function Task({ tasks, onAddTask ,onDeleteTask }) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-stone-700">Task</h2>
            <NewTask onAddTask={onAddTask} />
            {tasks.length === 0 && <p className="text-stone-800">This Project does not have any tasks yet.</p>}
            {tasks.length > 0 && 
            <ul className="flex flex-col gap-2 p-4 rounded-md bg-stone-100">
                {tasks.map((task)=>{
                    return <li key={task.taskId} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button onClick={()=>{
                            console.log(task.taskId);
                            
                            onDeleteTask(task.taskId)
                        }} className="text-stone-700 hover:text-red-500">Delete Task</button>
                    </li>
                })}    
            </ul>}
        </section>
    );
}

export default Task;