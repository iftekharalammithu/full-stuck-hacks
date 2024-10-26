import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "./Firebase/firebase";

const Signup = () => {
  const handlegooglepupup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      console.log("Login successfull");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handlegooglepupup}> Sign Up with Google</button>
    </div>
  );
};

export default Signup;
