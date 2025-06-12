import { useState } from "react";

function useLocalstorage<T>(key: string, initValue: T) {
    type valueType=typeof initValue;
    const [value, setVal]=useState<valueType | null>(initValue);

    function setValue(newValue: valueType) {
        setVal(newValue);
        localStorage.setItem(key,JSON.stringify(newValue));
    }
    
    function removeValue() {
        setVal(null);
        localStorage.removeItem(key);
    }

    return {value, setValue, removeValue};
}

export default useLocalstorage;