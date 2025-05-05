function SelectedProject({project}) {
    const formattedDate= new Date(project.dueDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })

    return (
        <div className="w-full p-16">
            <header className="flex flex-col gap-6">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
        </div>
    );
}

export default SelectedProject;