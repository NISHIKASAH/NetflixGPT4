//using same form for signIn AND SignUp
//showing some extra values for signup inside form
//------Simple example--------//
//Toggling bases on some state Vacriable
import React, { useState } from "react";

const Toggle = () => {
  const [isSignIn, setSignIn] = useState(true);

  const handleToggle = () => {
    setSignIn(!isSignIn);
  };
  return (
    <form>
      <h1>{isSignIn ? "signIn" : "signUp"}</h1>
      {!isSignIn && <input type="text" placeholder="fullname" />}
      <button>Submit</button>
      <p onClick={handleToggle}>
        {isSignIn
          ? "New account , please SignUp "
          : "Already registered ? sign in Now"}
      </p>
    </form>
  );
};

export default Toggle;
