import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthValue = (props)=>{
    const [isAuthorized , setAuth] = useState(false);
    const [userToken , setToken] = useState( localStorage.getItem("token") ? localStorage.getItem("token") : "" );
    const [location , setLocation] = useState('');
    const navigate = useNavigate();

    // function to redirect the unathaurised user to login page 
    const CheckAuthentication =(path)=>{
        
        if(!isAuthorized){
            setLocation(path);
            window.alert("please first login to your account.");
            navigate('/signin');
        }
    } 

    useEffect(()=>{
        if(userToken){
            setAuth(true);
        }
    },[]);
    
    return <AuthContext.Provider value={{isAuthorized , setAuth , userToken , setToken , location , setLocation , CheckAuthentication}} > {props.children} </AuthContext.Provider>
}

// custom hook
const useAuthContext = ()=> useContext(AuthContext);

export default AuthValue;
export {useAuthContext , AuthContext};