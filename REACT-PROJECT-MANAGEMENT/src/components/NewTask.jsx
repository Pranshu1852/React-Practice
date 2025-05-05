import { useState } from "react";

function NewTask({onAddTask}) {
    const [enteredTask,setenteredTask]= useState('');

    function handleChange(event){
        setenteredTask(event.target.value);
    }

    function handleClick() {
        if(enteredTask.trim()!==''){
            onAddTask(enteredTask);
            setenteredTask('');
        }
    }

    return (
        <div className="flex items-center gap-4">
            <input value={enteredTask} onChange={handleChange} className="px-2 py-1 rounded-md bg-stone-200" type="text" />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    );
}

export default NewTask;