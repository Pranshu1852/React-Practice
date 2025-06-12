import { useEffect, useRef, useState, type ChangeEvent } from "react";
import useClipboard from "./hooks/useClipboard"
import useDebounce from "./hooks/useDebounce";
import useKeyPress from "./hooks/useKeyPress";
import useLocalstorage from "./hooks/useLocalstorage";
import useResetState from "./hooks/useResetState";
import useToggle from "./hooks/useToggle";
import useOnClickOutside from "./hooks/useOnClickOutside";
import { cx,css } from "@emotion/css";
import { useSearchParams } from "react-router-dom";
import { useLongPress } from "./hooks/useLongPress";
import useUpdateEffect from "./hooks/useUpdateEffect";

function App() {
  const [counter,setCounter]=useState(0);

  // const ref=useRef(null);
  // useOnClickOutside(ref, () => {setOpen(false)});
  // const reff=useLongPress(()=>{
  //   console.log('press');
    
  // });

  useUpdateEffect(() => {
    console.log('hello');
    
  },[counter])


  return (
    <div>
      <button onClick={() => setCounter(counter+1)}>click</button>
    </div>
  )
}

export default App
