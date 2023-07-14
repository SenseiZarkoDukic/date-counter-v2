import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepPlus = () => setStep((s) => s + 1);
  const stepMinus = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const countPlus = () => setCount((c) => c + step);
  const countMinus = () => setCount((c) => c - step);
  // const days = count;
  // const daysSec = Math.trunc(count * 86400);

  // let date = Date().slice(0, 15);
  // let dateSec = Math.round(new Date().getTime() / 1000);

  // const dateFinal = new Date((dateSec + daysSec) * 1000)
  //   .toDateString()
  //   .slice(0, 15);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={stepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={stepPlus}>+</button>
      </div>
      <div>
        <button onClick={countMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={countPlus}>+</button>
      </div>
      <br />
      <p>
        {count > 0 && `${count} days from today is ${date.toDateString()}`}
        {count === 0 && `Today is ${date.toDateString()}`}
        {count < 0 && `${Math.abs(count)} days ago was ${date.toDateString()}`}
      </p>
    </>
  );
}
