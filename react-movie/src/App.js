import { useState, useEffect } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("Created :)");
  //   return byeFn;
  // }
  // useEffect(() => {
  //   console.log("hi :)");
  //   return () => console.log("bye :(");
  // }, []);
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  });
  // useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
