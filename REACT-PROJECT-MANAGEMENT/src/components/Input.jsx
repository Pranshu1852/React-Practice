function Input({ label, isTextArea, ...props }) {
    const classes="w-full p-2 text-xl rounded-md border-[1px] border-black";

    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{ label }</label>
            {isTextArea? <textarea className={classes} {...props}/>: <input className={classes} {...props}/>}
        </p>
    );
}

export default Input;