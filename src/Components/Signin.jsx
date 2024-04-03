import React from "react";

function Signin() {
  return (
    <div className="signin-main">
      <div className="heading">Signin to your Popx Account</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
        repudiandae?
      </p>
      <fieldset>
        <legend>Email Address</legend>
        <input type="text" placeholder="Enter email Address" />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input type="text" placeholder="Enter password" />
      </fieldset>
      <button>Login</button>
    </div>
  );
}

export default Signin;
