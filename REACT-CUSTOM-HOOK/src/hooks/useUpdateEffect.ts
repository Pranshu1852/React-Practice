import { useEffect, useRef } from "react";

function useUpdateEffect<T>(callback: (...args: T[]) => void, dep: unknown[]) {
    const flag=useRef<boolean>(true);

    useEffect(() => {
        if(!flag.current){
            callback();
        }

        flag.current=false;
    }, [...dep])
}

export default useUpdateEffect;