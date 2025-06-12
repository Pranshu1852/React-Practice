import { useRef, useState } from "react";

function useUndoRedo<T>(initValue: T) {
    type valueType=typeof initValue;
    const [state, setState]=useState(initValue);
    const arr=useRef<valueType[]>([initValue]);

    function undo() {

    }

    return {state,setState,undo,redo};
}