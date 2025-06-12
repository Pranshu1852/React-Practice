import { useEffect, useRef } from "react";

function useLongPress(callBack: (...args: unknown[])=>unknown) {
    const ref=useRef<HTMLElement>(null);
    const counter=useRef<number>(1);

    useEffect(() => {
        let timer: number;

        if(!ref.current) {
            return;
        }

        function createInterval(delay: number) {
            console.log(delay);
            
            timer=setInterval(() => {
                callBack();
                counter.current+=1;
                if(counter.current>5) {
                    counter.current=1;
                    clearInterval(timer);
                    createInterval(delay/2);
                }
            },delay);
        }

        function onClick() { 
            createInterval(1000);
        }

        function onMouseUp() {
            if(!timer) {
                return;
            }
            clearInterval(timer);

            counter.current=1;
        }

        ref.current.addEventListener('mousedown',onClick);
        ref.current.addEventListener('mouseup',onMouseUp);

        return () => {
            ref.current?.removeEventListener('mousedown',onClick);
            ref.current?.removeEventListener('mouseup',onMouseUp);
        }
    },[])

    return ref;
}

export {useLongPress};