import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increaseCount);
  const decrement = useCounterStore((state) => state.decreaseCount);

  return (
    <div>
      <h2>Zustand</h2>
      <h2>{count}</h2>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
}

export default App;
