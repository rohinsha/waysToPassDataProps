//how props are passed between two functions diff ways for it as callback functions which shows child to parent data flow.
import { useState } from "react";
import "./styles.css";
export function App() {
  const [count, setCount] = useState("");
  const [c, setC] = useState(0);
  const f = (data) => {
    // console.log(data);
    return <div>{data.msg}</div>;
  };
  const expensiveCal = (num) => {
    console.log("calculatin");
    for (let i = 0; i < 10000; i++) {
      num += 1;
    }
    return num;
  };
  const expensiveCalss = (num) => {
    console.log("calculatin");
    for (let i = 0; i < 10000; i++) {
      num += 1;
    }
    return num;
  };
  // const calculation = expensiveCal(c);
  const calculation = expensiveCalss(c);
  function increment() {
    console.log("incrementing the count");
    setCount((prev) => prev + 1);
  }
  const handleDatafromChild = (data) => {
    console.log(`${data} datadatadatadata`);
  };
  const handleInputText = (e) => {
    setCount(e.target.value);
    //console.log(e.target.value + "ddddd");
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>Calculation :{expensiveCal(0)}</h1>
      <h2>Calculation :{calculation}</h2>
      <App1
        render={f}
        render1={() => ["one,two"]}
        render2={(props) => {
          return <h5>{props.msg1}</h5>;
        }}
        render3={handleDatafromChild}
        inputCount={count}
        handleInChilProps={handleInputText}
      />
    </div>
  );
}
export function App1({
  render,
  render1,
  render2,
  render3,
  inputCount,
  handleInChilProps
}) {
  return (
    <div className="App">
      <h1>{render({ name: "rohu", msg: "hi" })}</h1>
      <h2>{render1().join(",")}</h2>
      <div>{render2({ msg1: "rohu" })}</div>
      <p>{render3("annand singh")}</p>

      {/* wrong way when by default events are given then dont call them otherwise for getting data like for eg here the p tag renders from render3() function so it is calling it. <input value={inputCount} onChange={render3()} /> */}
      <input value={inputCount} onChange={handleInChilProps} />
    </div>
  );
}
