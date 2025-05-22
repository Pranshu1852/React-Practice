import { useEffect, useRef, useState } from "react";

function useClipboard() {
    const [copy, setCopy]=useState('');
    const [isCopied, setIsCopied]=useState(false);
    const prevKey=useRef<string|null>(null);

    function copyData() {
        const data=window.getSelection();
        if(data){
            navigator.clipboard.writeText(data.toString());
            setCopy(data.toString());
            setIsCopied(true);
        }
    }

    document.addEventListener('keydown',(event: KeyboardEvent) => {
        if(prevKey.current){
            if(prevKey.current==='Control'&&event.key==='c'){
                setIsCopied(false);
                copyData();
            }
            prevKey.current=null;
        }

        prevKey.current=event.key;
    })


    return { copy, isCopied };
}

export default useClipboard;