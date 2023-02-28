import React, { useEffect } from 'react'
import{useDispatch, useSelector} from "react-redux"
import { getUsers } from '../../redux/actions/userAction'
import UserCard from "./UserCard"

function UserList() {
  const dispatch=useDispatch()
  useEffect(()=>dispatch(getUsers()),[])

   
   
    const users=useSelector(state=>state.authReducer.users.users)
  console.log(users,"hello user")

  return (
    
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px", justifyContent:"space-around" }}>
  
      {users && 
      users.map((el)=>(
   el.name
      ))
      }
    </div>
  )
}

export default UserList