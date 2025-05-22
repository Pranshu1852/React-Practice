import { useState } from "react";

function useKeyPress(key: string) {
    const [isPressed,setIsPressed]=useState(false);

    document.addEventListener('keypress', (event: KeyboardEvent)=>{
        if(event.key===key){
            setIsPressed(true);
        }
        else{
            setIsPressed(false);
        }
    })

    return isPressed;
}

export default useKeyPress;