import React from "react";
import Header from "./components/Header";
// import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import SSS from './components/MainBody.jsx'
import UseState_Hook from "./components/UseState_Hook.jsx";

function App() {
    const x = 999
  return (
    <div>
      {/* <Header x={x} y='11' z="qqqq" />
      <SSS />
      <Footer f='Onkar' /> */}
      <UseState_Hook />
    </div>
  );
}

export default App;
