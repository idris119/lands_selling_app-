import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  AuthContext = createContext()


export default function AuthProvider({children}) 
{
    const nav = useNavigate()
    const [current_user, setCurrentUser] = useState([])
    const [onChange, setonChange] = useState(true)
    // Login
    const login = (name, password) =>{
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name, password})
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            if(response.error)
            {
                Swal.fire(
                    'Error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
            { 
                nav("/")
                Swal.fire(
                    'Success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
            }
            else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }

        })
    }

    // Logout
    const logout = () =>{
       fetch("/logout", {
        method: "DELETE",
               })
       .then((res)=>res.json())
       .then((response)=>{
        setCurrentUser()
        setonChange(!onChange)
        console.log(response)
        if(response.error)
        {
            Swal.fire(
                'Error',
                response.error,
                'error'
              )
        }
        else if(response.success)
        { 
            nav("/login")
            Swal.fire(
                'Success',
                response.success,
                'success'
              )
              setonChange(!onChange)
        }
        else{
            Swal.fire(
                'Error',
                "Something went wrong",
                'error'
              )
        }
       })
    }
    // Register
    const register = (name, email, phone_number, password) =>{
        fetch("/users", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name, email, phone_number, password})
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            if(response.error)
            {
                Swal.fire(
                    'Error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
            { 
                nav("/login")
                Swal.fire(
                    'Success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
            }
            else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }

        })
    }

    useEffect(()=>{
        console.log("Error")
        fetch("/current_user")
        .then((res)=>res.json())
        .then((response)=>{
            setCurrentUser(response)
            console.log("current user ",response)
        })
    }, [onChange])

    const contextData ={
        login, 
        register,
        logout,
        current_user
    }

  return (
   <AuthContext.Provider value={contextData}>
    {children}
   </AuthContext.Provider>
  )
}