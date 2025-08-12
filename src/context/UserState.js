import React, { useState } from "react"; 
import UserContext from "./UserContext";
export default function UserState(props) {
  const host="http://localhost:5000/"
   const [user, setUser] = useState(null);
   const SignupCheck = async ({ name, email, password }) => {
    const response = await fetch(`${host}api/auth/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      return { success: true };
    } else {
      return { success: false};
    }
  };

  const loginCheck = async ({ email, password }) => {
    const response = await fetch(`${host}api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      return { success: true };
    } else {
      return { success: false };
    }
  }

    const fetchUserData = async () => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setUser(null)
          return {success:false}
        } 
        
        const response = await fetch(`${host}api/auth/getuser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token
        }
        });

        const userData = await response.json();
        setUser(userData);
        return { success: true };
        
    } catch (error) {
        console.error("Error fetching user:", error);
        return { success: false };
    }
    };
    const logout=()=>{
        let success=false
        const token = localStorage.getItem('authToken');
        if (token){
            localStorage.removeItem("authToken")
            setUser(null)
            success=true
            return(success)
        } 
        else{
            console.log("Not Signed in ")
            return (success)
        }
    }
    

  return (
    <UserContext.Provider value={{user,loginCheck,SignupCheck,fetchUserData,logout}}>
      {props.children}
    </UserContext.Provider>
  );
}