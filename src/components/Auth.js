import React, { useContext } from "react";
import authContext from "../context/AuthContext";

const Auth = () => {
  const { isChecked, setIsChecked } = useContext(authContext);

  return (
    <>
      <h1>Click on the checkbox to get authenticated</h1>
      {isChecked ? (
        <p>You are now authenticated, you can proceed</p>
      ) : (
        <p>you are not authenticated</p>
      )}
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        I am not a robot
      </label>
    </>
  );
};

export default Auth;
