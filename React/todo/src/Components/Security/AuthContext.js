import { createContext , useContext, useState } from "react";


export const AuthoContext  = createContext();

export const useAuth= () => useContext(AuthoContext);

export default function  AuthoProvider({children}) {

// const [number, setnumber] = useState(10);
const [isAuth, setIsAuth] = useState(false);

function login(username, password){
    if(username === "mohit" && password === "1234"){
        setIsAuth(true) 
        return true

    }
    else{
        setIsAuth(false)
        return false
    }
}
    

function logout() {
    setIsAuth(false)
    
}



// setInterval( () => setnumber(number + 1),10000)


    return (
        <AuthoContext.Provider value={{ isAuth, login , logout}}>
            {children}
        </AuthoContext.Provider>
        
    )
}

