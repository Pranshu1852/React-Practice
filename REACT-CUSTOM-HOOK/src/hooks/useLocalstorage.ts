function useLocalstorage<T>(key: string, initValue: T) {
    type valueType=typeof initValue;
    let value:valueType | null=initValue;

    function setValue(newValue: valueType) {
        value=newValue;
        localStorage.setItem(key,JSON.stringify(newValue));
    }
    
    function removeValue() {
        value=null;
        localStorage.removeItem(key);
    }

    return {value, setValue, removeValue};
}

export default useLocalstorage;