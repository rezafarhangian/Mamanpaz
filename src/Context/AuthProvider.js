import { useContext, createContext, useState, useEffect } from 'react'

const AuthContext = createContext()
const AuthContextDispatcher = createContext()




export default function AuthProvider({ children }) {


   const [state, setState] = useState()

   useEffect(() => {
     const userData = JSON.parse(localStorage.getItem("auth")) 
     if(userData){
         setState(userData)
     }
   },[])

   useEffect(() => {
    if(state){

        localStorage.setItem("auth",JSON.stringify(state))
    }
   },[state])

    return (
      
        <AuthContext.Provider value={state}>
            <AuthContextDispatcher.Provider value={setState}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
export const useAuthActions = () => useContext(AuthContextDispatcher)