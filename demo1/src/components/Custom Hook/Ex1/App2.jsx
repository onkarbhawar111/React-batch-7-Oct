import useCounter from "./CustomHook.jsx";

function App2() {
  const [count, handleAdd, handleReset, handleSub] = useCounter();

  return (
    <>
      <div>{count}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App2;
