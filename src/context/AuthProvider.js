import React, { useState } from "react";
import authContext from "./AuthContext";

const AuthProvider = (props)=>{

    let [isChecked,setIsChecked] = useState(false);

    return(
        <>
        <authContext.Provider value={{isChecked,setIsChecked}}>
            {props.children}
        </authContext.Provider>
        </>
    )
}

export default AuthProvider;