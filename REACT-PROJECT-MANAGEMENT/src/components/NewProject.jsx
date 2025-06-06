import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({onAdd, onCancel}) {
    const modal=useRef();

    const title=useRef();
    const description=useRef();
    const dueDate=useRef();

    function handleSave() {
        const enteredTitle= title.current.value;
        const enteredDescription= description.current.value;
        const enteredDueDate= dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-full p-16 flex flex-col gap-10">
            <menu className="flex flex-row items-center justify-center gap-4">
                <li>
                    <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" isTextArea={true} />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>
    );
}

export default NewProject;