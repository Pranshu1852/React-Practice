import { useEffect, useState } from "react";

function useDebounce(func: (args: unknown[])=>unknown, delay: number) {
    let timer: number;
    const debounceFunc=function (newArgs: unknown[]){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func(newArgs);
        },delay)
    }
    
    useEffect(()=>{
        return () => {
            clearTimeout(timer);
        }
    },[])

    return debounceFunc;
}

export default useDebounce;