import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthValue = (props)=>{
    const [isAuthorized , setAuth] = useState(false);
    const [userToken , setToken] = useState( localStorage.getItem("token") ? localStorage.getItem("token") : "" );
    const [location , setLocation] = useState('');

    useEffect(()=>{
        if(userToken){
            setAuth(true);
        }
    },[]);
    
    return <AuthContext.Provider value={{isAuthorized , setAuth , userToken , setToken , location , setLocation}} > {props.children} </AuthContext.Provider>
}

// custom hook
const useAuthContext = ()=> useContext(AuthContext);

export default AuthValue;
export {useAuthContext , AuthContext};