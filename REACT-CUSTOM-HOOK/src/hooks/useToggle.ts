import { useState } from "react";

function useToggle() {
    const [value,setValue]=useState(false);

    function toggle() {
        setValue(!value);
    }

    return { value, toggle, setValue};
};

export default useToggle;