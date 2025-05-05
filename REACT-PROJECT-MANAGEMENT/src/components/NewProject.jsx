import Input from "./Input";

function NewProject() {
    return (
        <div className="w-full p-16 flex flex-col gap-10">
            <menu className="flex flex-row items-center justify-center gap-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" isTextArea={true} />
                <Input label="Due Date" />
            </div>
        </div>
    );
}

export default NewProject;