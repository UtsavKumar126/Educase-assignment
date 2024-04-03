import React from "react";

function Signup() {
  return (
    <div className="signin-main">
      <div className="heading">Create your PopX account</div>
      <fieldset>
        <legend className="important">Full Name</legend>
        <input type="text" placeholder="Enter your name " />
      </fieldset>
      <fieldset>
        <legend className="important">Phone number</legend>
        <input type="text" placeholder="Enter your phone number " />
      </fieldset>
      <fieldset>
        <legend className="important">Email address</legend>
        <input type="text" placeholder="Enter your email address " />
      </fieldset>
      <fieldset>
        <legend className="important">Password</legend>
        <input type="text" placeholder="Enter your password " />
      </fieldset>
      <fieldset>
        <legend className="important">Company name</legend>
        <input type="text" placeholder="Enter your company name " />
      </fieldset>
      <label htmlFor="agency" className="important">Are you an Agency?</label>
      <div className="radio-buttons">
        <div>
          <input type="radio" name="option" value="Yes" />
          <label>Yes</label>
        </div>
        <div>
          <input type="radio" name="option" value="No" />
          <label>No</label>
        </div>
      </div>
      <button className="signup-button">Create Account</button>
    </div>
  );
}

export default Signup;
