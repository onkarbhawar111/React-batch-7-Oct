// import React from "react";
// import {useState} from 'react'
// import UseState_Hook from "./components/UseState Hook/UseState_Hook";
// import NameChange from "./components/UseState Hook/NameChange";
// import Ex2 from "./components/ConditionalRendering/Ex2";
// import Ex3 from "./components/ConditionalRendering/Ex3";
// import ObjectEx from "./components/UseState Hook/ObjectEx";
// import ArrayEx from "./components/UseState Hook/ArrayEx";
// import UseEffect_Hook from "./components/UseEffect Hook/UseEffect_Hook";
// import HomePage from "./components/UseEffect Hook/HomePage";
// import AboutPage from "./components/UseEffect Hook/AboutPage";
// import TimerExample from "./components/UseEffect Hook/TimerExample";
// import Width from "./components/UseEffect Hook/Width";
// import Parent from "./components/Context/Parent";

import Test from "./components/Assignment/Test"
import Parent from "./components/Context/Ex1/Parent"
import App1 from "./components/Context/Ex3/App1"
import AuthContext from "./components/Context/Ex4/AuthContext"
import App2 from "./components/Custom Hook/Ex1/App2"
import CustomHook from "./components/Custom Hook/Ex1/CustomHook"
import Test1 from "./components/Test1"

function App(){

  // const [toggle, setToggle] = useState(true) //toggle = true

  // function handleChange(){
  //   setToggle(!toggle)
  // }

  return(
    <>
    {/* <button onClick={handleChange}>Change Page</button>
    <div>{toggle == true ? <HomePage /> : <AboutPage />}</div> */}
    {/* <Width /> */}
      {/* <TimerExample /> */}
      {/* <Parent /> */}
      {/* <AuthContext /> */}
      {/* <App1 /> */}
      {/* <AuthContext /> */}
      {/* <Test /> */}
      {/* <CustomHook /> */}
      {/* <App2 /> */}
      <Test1 />
    </>
  )
}

export default App