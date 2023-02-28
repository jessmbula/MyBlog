import axios from "axios"
import {GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, GET_USERS} from "../actionTypes"
export const registerUser=(newUser)=>(dispatch)=>{
axios.post("/api/auth/register",newUser)
.then((res)=>dispatch({type:REGISTER_USER,payload:res.data}))
.catch((err)=>console.log(err))
}
//login user
export const loginUser=(user)=>(dispatch)=>{
    axios.post("/api/auth/login",user)
    .then((res)=>dispatch({type:LOGIN_USER,payload:res.data}))
    .catch((err)=>console.log(err))
}

export const getAuthUser=()=>(dispatch)=>{
    const config={
        headers:{"authorization":localStorage.getItem("token")
    }}
axios.get("/api/auth/user",config)
.then((res)=>dispatch({type:GET_AUTH_USER,payload:res.data}))
.catch((err)=>console.log(err))
}

export const logoutUser=()=>(dispatch)=>{
dispatch({
    type:LOGOUT_USER
})
}

export const getUsers=()=>(dispatch)=>{
    const config={
        headers:{"authorization":localStorage.getItem("token")
    }}
    
     
        axios.get("/api/auth/users",config)
        .then((res)=>dispatch({type:GET_USERS,payload:res.data}))
       
        .catch((err)=>console.log(err))
   
}


