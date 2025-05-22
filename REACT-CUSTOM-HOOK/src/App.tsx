import useClipboard from "./hooks/useClipboard"
import useKeyPress from "./hooks/useKeyPress";
import useLocalstorage from "./hooks/useLocalstorage";
import useResetState from "./hooks/useResetState";
import useToggle from "./hooks/useToggle";

function App() {
  const {copy,isCopied}=useClipboard();
  const { value,toggle,setValue }=useToggle();
  const {value: data,setValue: setData,removeValue: removeData}=useLocalstorage('testing','');
  const isPressed=useKeyPress('a');
  const {state,setState,reset}=useResetState('first state');

  return (
    <div>
      <h1>Hello</h1>
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
      <button onClick={()=>reset()}>Reset state</button>
    </div>
  )
}

export default App
