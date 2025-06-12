import { useEffect, useRef } from "react";

function useDebounce(func: (...args: unknown[]) => unknown, delay: number) {
    const timer=useRef<number| undefined>(undefined);
    const debounceFunc=function (newArgs?: unknown[]){
        clearTimeout(timer.current);
        timer.current=setTimeout(()=>{
            func(newArgs);
        },delay)
    }
    
    useEffect(()=>{
        return () => {
            clearTimeout(timer.current);
        }
    },[])

    return debounceFunc;
}

export default useDebounce;