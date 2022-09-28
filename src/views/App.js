import React from "react";
import ScrollToTop from "../ScrollToTop";
import Admin from "./Admin/Admin";
import MainLanding from "./Landing/MainLanding";
import './App.css';
import Home from "./Admin/containers/Home/Home";
import { useRef } from "react";
import myVideo from './gazoil.mp4'
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [state,setState] = useState(false)
  let user_info = JSON.parse(localStorage.getItem('user_info'))
  const ref = useRef()
setTimeout(()=>{
  ref.current.style = "display:none"
  setState(true)
},6000)
  return (
    <>
    <ScrollToTop/>
   
    {state == true ?  user_info?.user?.role === 'Manager' ? <Admin/> : <MainLanding />: <video ref={ref} autoPlay   muted>
      <source src={myVideo} type="video/mp4"/>
    </video>}
    </>
  )
}

export default App;
