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

function App() {
  // const {copy,isCopied}=useClipboard();
  // const { value,toggle,setValue }=useToggle();
  // const {value: data,setValue: setData,removeValue: removeData}=useLocalstorage('testing','LocalData');
  // const isPressed=useKeyPress('a');
  // const {state,setState,reset}=useResetState('first state');
  const [searchParams,setSearchParams]=useSearchParams();
  const debounceFunc=useDebounce(sayHello, 3000);
  const [isOpen, setOpen]=useState(true);
  const ref=useRef(null);
  useOnClickOutside(ref, () => {setOpen(false)});
  const reff=useLongPress(()=>{
    console.log('press');
    
  });

  function sayHello() {
    console.log('hello');
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const searchQuery = event.target.value;

    searchParams.set('search', searchQuery);
    setSearchParams(searchParams);
    if (searchQuery === '') {
      if (searchParams.has('search')) {
        searchParams.delete('search');
        setSearchParams(searchParams);
      }
    }
  }

  const divstyle=css`
    background-color: burlywood;
    color: cadetblue;
  `

  useEffect(()=>{
    debounceFunc();
  },[searchParams])

  return (
    <div className={cx(divstyle,"divclass")}>
      {/* <h1>Hello</h1>
      {copy}, {`${isCopied}`}
      {value && <h2>Toggle value</h2>}
      <button onClick={()=>setValue(true)}>open</button>
      <button onClick={()=>setValue(false)}>close</button>
      <button onClick={()=>toggle()}>Toggle</button>
      <h2>{data}</h2>
      <button onClick={()=>setData('data is changing')}>change localstorage</button>
      <button onClick={()=>removeData()}>remove localstorage</button>
      {isPressed && <h2>Key is pressed</h2>}
      <h1>{state}</h1>
      <button onClick={()=>setState('second state')}>set state to second</button>
      <button onClick={()=>reset()}>Reset state</button> */}
      {/* <button onClick={()=>debounceFunc()}>debounce</button>
      <input onChange={handleChange} type="text" />
      {isOpen && <h2>Click on div</h2>}
      <div ref={ref} style={{
        height: "200px",
        width: "200px",
        backgroundColor: "gray"
      }}> */}



      <button ref={reff}>Print</button>

      </div>
    // </div>
  )
}

export default App
