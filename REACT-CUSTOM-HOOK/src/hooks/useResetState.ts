import { useState } from "react";

function useResetState<T>(initValue: T) {
    type valueType=typeof initValue;
    const [state, setState]=useState(initValue);

    function reset() {
        setState(initValue);
    }

    return { state, setState, reset };
}

export default useResetState;