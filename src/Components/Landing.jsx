import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate=useNavigate();
  return (
    <div className="landing-main">
      <div className="heading">Welcome to PopX</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ullam.
      </p>
      <div className="buttons-div">
        <button onClick={()=>navigate("/signup")}className="button1">Create Account</button>
        <button onClick={()=>navigate("/signin")}className="button2">Already Registered? Login</button>
      </div>
    </div>
  );
}

export default Landing;
